import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import { Profile } from './pages/profile/profile'
import { Router, Config } from '@saber2pr/router'
import { Repository } from './pages/repository/repository'
import { News } from './pages/news/news'

const container = document.createElement('div')
document.body.append(container)

Config.ReactDOM = ReactDOM
Config.container = container

Router({
  '/': '/profile',
  '/profile': () => <Profile />,
  '/repository': () => <Repository />,
  '/news': () => <News />
})