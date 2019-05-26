import { useState, useEffect } from 'react'
import { Users } from '@saber2pr/types-github-api'
import { Request } from '../request'

export const useUserFollowingPage = (userId: string, page: number = 1) => {
  const [following, setter] = useState<Users>([])

  useEffect(() => {
    Request.Github.getUserFollowingPage(userId, page).then(setter)
  }, [userId, page])

  return following
}
