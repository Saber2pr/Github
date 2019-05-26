import React from 'react'
import { InputHistory } from '../../components'
import { store } from '../../store'
import { useUserLogin, useUserIdHistory } from '../../hooks'
import { Local } from '../../local'
import { Anchor } from '@saber2pr/router'
import './style.less'

export const Login = () => {
  const userId = store.getState().userId

  const [usernameInput, passwordInput, onSubmit] = useUserLogin()

  const history = useUserIdHistory(userId)

  return (
    <>
      <header>
        <span className="title">Login({userId})</span>
      </header>

      <main className="login">
        <dl className="submit">
          <dt className="title">
            <h1>submit</h1>
          </dt>

          <dd className="line">
            <form onSubmit={onSubmit}>
              <table className="formTable">
                <tbody>
                  <tr>
                    <td>userId</td>
                    <td>
                      <input
                        type="text"
                        defaultValue={userId}
                        ref={usernameInput}
                        list="userAuthHistory"
                      />
                      <InputHistory
                        listId="userAuthHistory"
                        history={history}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>password</td>
                    <td>
                      <input type="password" autoFocus ref={passwordInput} />
                    </td>
                  </tr>
                </tbody>
              </table>

              <button>submit</button>
              <Anchor href="/">cancel</Anchor>
            </form>
          </dd>

          <dd className="message">
            Why do I need login? Because the github set a api-times-limit if
            have no access_token or auth. It looks like that you can access
            everywhere without token, but it's going wrong when your access
            times beyond the max.
          </dd>
          <dd className="message">
            You will submited under https, the username and password will be
            stored in localStorage by base64.
          </dd>

          <dd className="message">v0.0.1 by saber2pr</dd>

          <dd className="message">
            <button onClick={() => Local.clear()}>clear localStorage</button>
          </dd>
        </dl>
      </main>
    </>
  )
}
