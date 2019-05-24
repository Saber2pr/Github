import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import { Profile } from './pages/profile/profile'
import { Router, Config } from '@saber2pr/router'
import { News, Repo, FindRepo } from './pages'

const container = document.createElement('div')
document.body.append(container)

Config.ReactDOM = ReactDOM
Config.container = container

Router({
  '/': '/repo',
  '/profile': () => <Profile />,
  '/repo': () => <Repo />,
  '/news': () => <News />,
  '/findRepo': () => <FindRepo />
})
