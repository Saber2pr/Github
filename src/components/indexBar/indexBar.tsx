import React from 'react'
import './indexBar.less'

export interface IndexBar {
  last: () => any
  next: () => any
}

export const IndexBar = ({ last, next }: IndexBar) => {
  return (
    <nav className="indexBar">
      <button className="left" onClick={last}>
        pre
      </button>
      <span className="center" />
      <button className="right" onClick={next}>
        next
      </button>
    </nav>
  )
}
