import React from 'react'
import { Link } from '@saber2pr/router'
import { useUserInfor } from '../../hooks'
import { useStore } from '../../store'
import './style.less'

export const RoutesBar = () => {
  const [{ userId }] = useStore()
  const { public_repos } = useUserInfor(userId)

  return (
    <nav className="routesBar">
      <Link to="/profile">profile</Link>
      <Link to="/repo">repository({public_repos})</Link>
      <Link to="/news">news</Link>
    </nav>
  )
}
