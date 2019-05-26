import React from 'react'
import { Anchor } from '@saber2pr/router'
import './style.less'
import { useUserInfor } from '../../hooks'
import { store } from '../../store'

export const RoutesBar = () => {
  const { public_repos } = useUserInfor(store.getState().userId)

  return (
    <nav className="routesBar">
      <Anchor href="/profile">profile</Anchor>
      <Anchor href="/repo">repository({public_repos})</Anchor>
      <Anchor href="/news">news</Anchor>
    </nav>
  )
}
