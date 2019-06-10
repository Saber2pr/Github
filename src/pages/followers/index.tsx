import React from 'react'
import { RoutesBar, IndexBar, UserList } from '../../components'
import { useIndex, useUserFollowPage } from '../../hooks'
import { useStore } from '../../store'

export const Followers = () => {
  const [index, last, next] = useIndex()

  const [{ userId }] = useStore()
  const followers = useUserFollowPage('follower', userId, index)

  return (
    <>
      <header>
        <span className="title">Followers</span>
      </header>

      <main>
        <UserList list={followers} />

        <IndexBar last={last} next={next} />
      </main>

      <footer>
        <RoutesBar />
      </footer>
    </>
  )
}
