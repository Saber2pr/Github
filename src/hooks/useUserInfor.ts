import { useState, useEffect } from 'react'
import { User } from '@saber2pr/types-github-api'
import { Request } from '../request'

export const useUserInfor = (userId: string) => {
  const [userInfor, setUserInfor] = useState<User>({} as User)

  useEffect(() => {
    Request.Github.getUserInfor(userId).then(setUserInfor)
  }, [userId])

  return userInfor
}
