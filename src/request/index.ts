import * as github from './github'
import axios from 'axios'
import { Local } from '../local'
import { store } from '../store'
import { Base64 } from '../utils'

export namespace Request {
  export const Github = github
}

axios.interceptors.request.use(config => {
  const userAuth = Local.getUserAuth() || {}

  const username = store.getState().userId
  const password = userAuth[username]

  if (username && password) {
    config.headers.Authorization =
      'Basic ' + Base64.encode(`${username}:${password}`)
  }

  return config
})
