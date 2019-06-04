import React from 'react'
import { Link } from '@saber2pr/router'
import { useUserInfor } from '../../hooks'
import { store } from '../../store'
import './style.less'

export const RoutesBar = () => {
  const { public_repos } = useUserInfor(store.getState().userId)

  return (
    <nav className="routesBar">
      <Link to="/profile">profile</Link>
      <Link to="/repo">repository({public_repos})</Link>
      <Link to="/news">news</Link>
    </nav>
  )
}
