import React from 'react'
import './style.less'

export const CountLabel = ({ count }: { count: string }) => (
  <span className="counter">{count}</span>
)
