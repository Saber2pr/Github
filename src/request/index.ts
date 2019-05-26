import * as github from './github'
import axios from 'axios'
import { Local } from '../local'
import { store, throwError } from '../store'
import { Base64 } from '../utils'
import { push } from '@saber2pr/router'

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

axios.interceptors.response.use(
  _ => _,
  err => {
    const status = err.response.status
    if (status === 401) {
      push('/login')
    } else {
      store.dispatch<throwError>({
        type: 'throwError',
        payload: {
          status: status,
          statusText: err.response.statusText,
          message: err.response.data.message
        }
      })
      push('/error')
    }
  }
)
