import React from 'react'
import { store } from '../../store'
import * as A from '../../store/actions'
import { RoutesBar, InputHistory } from '../../components'
import { useUpdateUser, useUserIdHistory } from '../../hooks'
import { push } from '@saber2pr/router'
import './style.less'

export const Menu = () => {
  const [userIdInput, userId] = useUpdateUser()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (userIdInput.current.value) {
      store.dispatch<A.updateUser>({
        type: 'updateUser',
        payload: userIdInput.current.value
      })
      push('/')
    }
  }

  const history = useUserIdHistory(userId)

  return (
    <>
      <header>
        <span className="title">Menu</span>
      </header>
      <main className="menu">
        <ul>
          <li>Input a github id: </li>

          <li>
            <form onSubmit={onSubmit}>
              userId:
              <input
                type="text"
                ref={userIdInput}
                autoFocus
                placeholder={userId}
                list="userIdHistory"
              />
              <InputHistory listId="userIdHistory" history={history} />
              <button>update</button>
            </form>
          </li>

          <li>current: {userId}</li>
        </ul>
      </main>
      <footer>
        <RoutesBar />
      </footer>
    </>
  )
}
