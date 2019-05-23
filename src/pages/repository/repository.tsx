import React, { useState, useEffect } from 'react'
import { FootBar } from '../../components/footBar/footBar'
import { Request } from '../../request'
import { Repositorys } from '@saber2pr/types-github-api'

export interface Repository {
  userId?: string
}

const useUserRopes = (userId = 'saber2pr') => {
  const [repos, setRepos] = useState<Repositorys>([] as Repositorys)
  useEffect(() => {
    Request.Github.getUserRepos(userId).then(setRepos)
  }, [userId])
  return repos
}

export const Repository = ({ userId }: Repository) => {
  const repos = useUserRopes(userId)
  return (
    <>
      <header>Repository</header>
      <main>Repository</main>
      <footer>
        <FootBar />
      </footer>
    </>
  )
}
