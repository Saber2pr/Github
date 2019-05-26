import React from 'react'
import { RoutesBar, IndexBar, UserList } from '../../components'
import { useIndex, useUserFollowingPage } from '../../hooks'
import { store } from '../../store'

export const Following = () => {
  const [index, last, next] = useIndex()
  const followers = useUserFollowingPage(store.getState().userId, index)

  return (
    <>
      <header>
        <span className="title">Following</span>
      </header>

      <main className="userList">
        <UserList list={followers} />

        <IndexBar last={last} next={next} />
      </main>

      <footer>
        <RoutesBar />
      </footer>
    </>
  )
}
