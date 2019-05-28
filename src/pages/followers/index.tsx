import React from 'react'
import { RoutesBar, IndexBar, UserList } from '../../components'
import { useIndex, useUserFollowPage } from '../../hooks'
import { store } from '../../store'

export const Followers = () => {
  const [index, last, next] = useIndex()
  const followers = useUserFollowPage(
    'follower',
    store.getState().userId,
    index
  )

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
