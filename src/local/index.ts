const enum KEY {
  userIdHistory = 'loc:uih'
}

export namespace Local {
  export function saveUserId(userId: string) {
    const userIdHistory: string[] = getUserIdHistory() || []

    userIdHistory.push(userId)

    localStorage.setItem(KEY.userIdHistory, JSON.stringify(userIdHistory))
  }

  export function getUserIdHistory() {
    return JSON.parse(localStorage.getItem(KEY.userIdHistory)) as string[]
  }
}
