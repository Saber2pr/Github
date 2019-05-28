import React from 'react'
import { RoutesBar, IndexBar, UserList } from '../../components'
import { useIndex, useUserFollowPage } from '../../hooks'
import { store } from '../../store'

export const Following = () => {
  const [index, last, next] = useIndex()
  const following = useUserFollowPage(
    'following',
    store.getState().userId,
    index
  )

  return (
    <>
      <header>
        <span className="title">Following</span>
      </header>

      <main>
        <UserList list={following} />

        <IndexBar last={last} next={next} />
      </main>

      <footer>
        <RoutesBar />
      </footer>
    </>
  )
}
