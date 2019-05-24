import React, { useRef, useState, useEffect } from 'react'
import { FootBar } from '../../components/footBar/footBar'
import { store } from '../../store/store'
import * as A from '../../store/actions'
import { push } from '@saber2pr/router'

export const Menu = () => {
  const userIdInput = useRef<HTMLInputElement>()

  const [current, setUserId] = useState(store.getState().userId)
  useEffect(() =>
    store.subscribe(() => {
      setUserId(store.getState().userId)
      push('/')
    })
  )

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (userIdInput.current.value) {
      store.dispatch<A.updateUser>({
        type: 'updateUser',
        payload: userIdInput.current.value
      })
    }
  }

  return (
    <>
      <header>Menu</header>
      <main>
        <ul>
          <li>
            <form onSubmit={onSubmit}>
              userId:
              <input
                type="text"
                ref={userIdInput}
                autoFocus
                placeholder={current}
              />
              <button>update</button>
            </form>
          </li>

          <li>current: {current}</li>
        </ul>
      </main>
      <footer>
        <FootBar />
      </footer>
    </>
  )
}
