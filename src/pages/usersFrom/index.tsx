import React from 'react'
import { useIndex, useUserList } from '../../hooks'
import { UserList, IndexBar, RoutesBar } from '../../components'
import { store } from '../../store'

export const UsersFrom = () => {
  const [index, last, next] = useIndex()
  const usersFrom = store.getState().usersForm
  const userList = useUserList(usersFrom.url, index)

  return (
    <>
      <header>
        <span className="title">{usersFrom.title}</span>
      </header>

      <main>
        <UserList list={userList} />

        <IndexBar last={last} next={next} />
      </main>

      <footer>
        <RoutesBar />
      </footer>
    </>
  )
}
