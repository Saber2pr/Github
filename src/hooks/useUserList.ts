import { useState, useEffect } from 'react'
import { Users } from '@saber2pr/types-github-api'
import { Request } from '../request'

export const useUserList = (url: string, page: number = 1) => {
  const [userList, setter] = useState<Users>([])

  useEffect(() => {
    Request.Github.getPage<Users>(url, page).then(setter)
  }, [url, page])

  return userList
}
