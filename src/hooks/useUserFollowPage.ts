import { useState, useEffect } from 'react'
import { Users } from '@saber2pr/types-github-api'
import { Request } from '../request'

export const useUserFollowPage = (
  type: 'follower' | 'following',
  userId: string,
  page: number = 1
) => {
  const [userList, setter] = useState<Users>([])

  useEffect(() => {
    switch (type) {
      case 'following':
        Request.Github.getUserFollowingPage(userId, page).then(setter)
        break

      case 'follower':
        Request.Github.getUserFollowersPage(userId, page).then(setter)
        break

      default:
        throw new TypeError()
    }
  }, [type, userId, page])

  return userList
}
