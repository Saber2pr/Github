import { Repositories } from '@saber2pr/types-github-api'
import { useState, useEffect } from 'react'
import { Request } from '../request'

export const useUserRopesPage = (
  userId: string,
  page: number = 1
): Repositories => {
  const [repos, setRepos] = useState<Repositories>([])

  useEffect(() => {
    Request.Github.getUserReposPage(userId, page)
      .then(setRepos)
      .then(() => window.scroll(0, 0))
      .catch(_ => _)
  }, [userId, page])

  return repos
}
