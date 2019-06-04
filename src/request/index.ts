import * as github from './github'
import { Local } from '../local'
import { store, A } from '../store'
import { Base64 } from '../utils'
import History from '@saber2pr/router'
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
  switch (res.status) {
    case 200:
      return res

    case 401:
      History.push('/login')
      return res

    default:
      store.dispatch<A.throwError>({
        type: 'throwError',
        payload: {
          status: res.status,
          statusText: res.statusText,
          message: JSON.stringify(res.data)
        }
      })

      History.push('/error')
      return res
  }
})
