import React from 'react'
import { Link } from '@saber2pr/router'
import { A, useStore } from '../../store'
import { Users } from '@saber2pr/types-github-api'
import './style.less'

const useOnClick = () => {
  const [_, dispatch] = useStore()

  return (login: string) => () => {
    dispatch<A.updateUser>({
      type: 'updateUser',
      payload: login
    })
  }
}

export const UserList = ({ list }: { list: Users }) => {
  const onClick = useOnClick()
  return (
    <ul className="userList">
      {list.map(({ login, avatar_url }) => (
        <li key={login}>
          <dl>
            <dt>
              <Link href="/profile" onClick={onClick(login)}>
                <strong>{login}</strong>
              </Link>
            </dt>
            <dd>
              <img className="avatar" src={avatar_url} alt="[img]" />
            </dd>
          </dl>
        </li>
      ))}
    </ul>
  )
}
