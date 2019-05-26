import { Base64 } from '../utils'

const enum KEY {
  userIdHistory = 'loc:uih',
  userAuth = 'loc:auth'
}

export namespace Local {
  type UserAuth = { [username: string]: string }

  export function saveUserId(userId: string) {
    const userIdHistory: string[] = getUserIdHistory() || []

    userIdHistory.push(userId)

    localStorage.setItem(KEY.userIdHistory, JSON.stringify(userIdHistory))
  }

  export function getUserIdHistory() {
    const item = localStorage.getItem(KEY.userIdHistory)
    if (!item) return

    return JSON.parse(item) as string[]
  }

  export function saveUserAuth(username: string, password: string) {
    const userAuth: UserAuth = getUserAuth() || {}

    userAuth[username] = password

    const value = Base64.encode(JSON.stringify(userAuth))

    localStorage.setItem(KEY.userAuth, value)
  }

  export function getUserAuth() {
    const item = localStorage.getItem(KEY.userAuth)
    if (!item) return

    const value = Base64.decode(item)

    return JSON.parse(value) as UserAuth
  }

  export function clear() {
    localStorage.clear()
  }
}
