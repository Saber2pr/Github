import React from 'react'
import { Router, Route } from '@saber2pr/router'
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
import './app.less'
import { Provider } from './store'

export const App = () => (
  <Provider>
    <Router>
      <Route default path="/profile" component={() => <Profile />} />
      <Route path="/repo" component={() => <Repo />} />
      <Route path="/news" component={() => <News />} />
      <Route path="/find" component={() => <Find />} />
      <Route path="/menu" component={() => <Menu />} />
      <Route path="/followers" component={() => <Followers />} />
      <Route path="/following" component={() => <Following />} />
      <Route path="/login" component={() => <Login />} />
      <Route path="/error" component={() => <Error />} />
      <Route path="/usersFrom" component={() => <UsersFrom />} />
    </Router>
  </Provider>
)
