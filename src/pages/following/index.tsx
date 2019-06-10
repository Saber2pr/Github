import React from 'react'
import { RoutesBar, IndexBar, UserList } from '../../components'
import { useIndex, useUserFollowPage } from '../../hooks'
import { useStore } from '../../store'

export const Following = () => {
  const [index, last, next] = useIndex()
  const [{ userId }] = useStore()
  const following = useUserFollowPage('following', userId, index)

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
