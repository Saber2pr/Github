import React, { useRef, useState, useEffect } from 'react'
import { store } from '../../store/store'
import * as A from '../../store/actions'
import { push } from '@saber2pr/router'
import { RoutesBar } from '../../components/routesBar/routesBar'
import './menu.less'

const useUpdateUser = (): [
  React.MutableRefObject<HTMLInputElement>,
  string
] => {
  const userIdInput = useRef<HTMLInputElement>()

  const [current, setUserId] = useState(store.getState().userId)
  useEffect(() =>
    store.subscribe(() => {
      setUserId(store.getState().userId)
      push('/')
    })
  )

  return [userIdInput, current]
}

export const Menu = () => {
  const [userIdInput, current] = useUpdateUser()

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
      <main className="menu">
        <ul>
          <li>Input your github id: </li>
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
        <RoutesBar />
      </footer>
    </>
  )
}
