import * as github from './github'
import { Local } from '../local'
import { store, A } from '../store'
import { Base64 } from '../utils'
import { push } from '@saber2pr/router'
import axios from '@saber2pr/request'

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

axios.interceptors.response.use(res => {
  if (res.status === 200) return res

  if (res.status === 401) {
    push('/login')
  } else {
    store.dispatch<A.throwError>({
      type: 'throwError',
      payload: {
        status: res.status,
        statusText: res.statusText,
        message: JSON.stringify(res.data)
      }
    })
    push('/error')
  }
})
