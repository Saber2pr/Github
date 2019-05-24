import React from 'react'
import { Anchor } from '@saber2pr/router'
import './footBar.less'

export const FootBar = () => {
  return (
    <nav className="footBar">
      <Anchor className="footBar_a" href="/profile">profile</Anchor>
      <Anchor className="footBar_a" href="/repo">repository</Anchor>
      <Anchor className="footBar_a" href="/news">news</Anchor>
    </nav>
  )
}
