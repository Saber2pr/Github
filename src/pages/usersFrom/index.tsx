import React from 'react'
import { useIndex, useUserList } from '../../hooks'
import { UserList, IndexBar, RoutesBar } from '../../components'
import { useStore } from '../../store'

export const UsersFrom = () => {
  const [index, last, next] = useIndex()
  const [{ usersForm }] = useStore()
  const userList = useUserList(usersForm.url, index)

  return (
    <>
      <header>
        <span className="title">{usersForm.title}</span>
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
