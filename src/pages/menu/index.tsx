import React from 'react'
import { RoutesBar, InputHistory } from '../../components'
import { useUserUpdate, useUserIdHistory } from '../../hooks'
import { Anchor } from '@saber2pr/router'
import './style.less'

export const Menu = () => {
  const [userIdInput, userId, onSubmit] = useUserUpdate()

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
          <Anchor href="/login">
            <strong>
              <u>Generate Authorization</u>
            </strong>
          </Anchor>
        </ul>
      </main>
      <footer>
        <RoutesBar />
      </footer>
    </>
  )
}
