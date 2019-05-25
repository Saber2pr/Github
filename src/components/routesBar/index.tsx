import React from 'react'
import { Anchor } from '@saber2pr/router'
import './style.less'

export const RoutesBar = () => {
  return (
    <nav className="routesBar">
      <Anchor href="/profile">profile</Anchor>
      <Anchor href="/repo">repository</Anchor>
      <Anchor href="/news">news</Anchor>
    </nav>
  )
}
