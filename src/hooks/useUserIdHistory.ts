import { useEffect, useState } from 'react'
import { Local } from '../local'

export const useUserIdHistory = (userId: string): Array<string> => {
  const [userIdHistory, setHistory] = useState<string[]>([])

  useEffect(() => {
    const history = Local.getUserIdHistory()

    if (history) {
      history.includes(userId) || Local.saveUserId(userId)
    } else {
      Local.saveUserId(userId)
    }

    setHistory(history || [userId])
  }, [userId])

  return userIdHistory
}
