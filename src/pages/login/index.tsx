import React from 'react'
import { RoutesBar } from '../../components'
import { store } from '../../store'
import './style.less'
import { useUserLogin } from '../../hooks'

export const Login = () => {
  const userId = store.getState().userId

  const [usernameInput, passwordInput] = useUserLogin()

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
            <form>
              <table className="formTable">
                <tr>
                  <th>userId</th>
                  <th>
                    <input
                      type="text"
                      defaultValue={userId}
                      ref={usernameInput}
                    />
                  </th>
                </tr>

                <tr>
                  <th>password</th>
                  <th>
                    <input type="text" autoFocus ref={passwordInput} />
                  </th>
                </tr>
              </table>
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

          <dd className="message">
            <button>clear localStorage</button>
          </dd>
        </dl>
      </main>

      <footer>
        <RoutesBar />
      </footer>
    </>
  )
}
