import React from 'react'
import { RoutesBar, IndexBar, UserList } from '../../components'
import { useUserFollowersPage, useIndex } from '../../hooks'
import { store } from '../../store'

export const Followers = () => {
  const [index, last, next] = useIndex()
  const followers = useUserFollowersPage(store.getState().userId, index)

  return (
    <>
      <header>
        <span className="title">UserList</span>
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
