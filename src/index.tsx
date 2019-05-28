import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@saber2pr/router'
import {
  News,
  Repo,
  Find,
  Menu,
  Profile,
  Followers,
  Following,
  Login,
  Error,
  UsersFrom
} from './pages'
import './index.less'

const container = document.createElement('div')
document.body.append(container)

Router.container = container
Router.render = ReactDOM.render

Router({
  '/': '/profile',
  '/profile': () => <Profile />,
  '/repo': () => <Repo />,
  '/news': () => <News />,
  '/find': () => <Find />,
  '/menu': () => <Menu />,
  '/followers': () => <Followers />,
  '/following': () => <Following />,
  '/login': () => <Login />,
  '/error': () => <Error />,
  '/usersFrom': () => <UsersFrom />
})
