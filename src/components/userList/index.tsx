import React from 'react'
import { store } from '../../store'
import { Anchor } from '@saber2pr/router'
import * as A from '../../store'
import { Users } from '@saber2pr/types-github-api'
import './style.less'

const onClick = (login: string) => () =>
  store.dispatch<A.updateUser>({
    type: 'updateUser',
    payload: login
  })

export const UserList = ({ list }: { list: Users }) => (
  <ul className="userList">
    {list.map(({ login, avatar_url }) => (
      <li key={login}>
        <dl>
          <dt>
            <Anchor href="/" onClick={onClick(login)}>
              <strong>{login}</strong>
            </Anchor>
          </dt>
          <dd>
            <img className="avatar" src={avatar_url} alt="[img]" />
          </dd>
        </dl>
      </li>
    ))}
  </ul>
)
