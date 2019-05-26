import { useState, useEffect } from 'react'
import { Users } from '@saber2pr/types-github-api'
import { Request } from '../request'

export const useUserFollowersPage = (userId: string, page: number = 1) => {
  const [followers, setter] = useState<Users>([])

  useEffect(() => {
    Request.Github.getUserFollowersPage(userId, page).then(setter)
  }, [userId, page])

  return followers
}
