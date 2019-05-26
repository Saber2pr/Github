import React from 'react'
import { RoutesBar } from '../../components'
import { store } from '../../store'
import { Anchor } from '@saber2pr/router'
import './style.less'

export const Error = () => {
  const { status, statusText, message } = store.getState().error
  return (
    <>
      <header>
        <span className="title">Error</span>
      </header>

      <main className="error">
        <h1>
          <strong>Something occur error.</strong>
        </h1>

        <table>
          <tbody>
            <tr>
              <th>Type</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>status</td>
              <td>{status}</td>
            </tr>

            <tr>
              <td>statusText</td>
              <td>{statusText}</td>
            </tr>

            <tr>
              <td>message</td>
              <td>{message}</td>
            </tr>
          </tbody>
        </table>

        <dl>
          <dt>
            <h2>
              <strong>Solution</strong>
            </h2>
          </dt>
          <dd>
            <ol className="tips">
              <li>check your network.</li>
              <li>
                <Anchor href="/login">
                  <u>try to re-login.</u>
                </Anchor>
              </li>
            </ol>
          </dd>
        </dl>
      </main>

      <footer>
        <RoutesBar />
      </footer>
    </>
  )
}
