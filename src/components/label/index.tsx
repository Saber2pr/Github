import React from 'react'
import './style.less'

export const Label = ({ children }: { children: string | number }) => (
  <span className="label">{children}</span>
)
