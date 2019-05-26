import { useState, useEffect } from 'react'
import { Repositories } from '@saber2pr/types-github-api'
import { Request } from '../request'

export const useUserStars = (userId: string) => {
  const [stars, setter] = useState<Repositories>([])

  useEffect(() => {
    Request.Github.getUserStarred(userId).then(setter)
  }, [userId])

  return stars
}
