import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Config } from '@saber2pr/router'
import { News, Repo, Find, Menu, Profile } from './pages'
import './index.less'

const container = document.createElement('div')
document.body.append(container)

Config.render = ReactDOM.render
Config.container = container

Router({
  '/': '/profile',
  '/profile': () => <Profile />,
  '/repo': () => <Repo />,
  '/news': () => <News />,
  '/find': () => <Find />,
  '/menu': () => <Menu />
})
