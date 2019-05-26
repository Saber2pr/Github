import { useRef, useState, useEffect } from 'react'
import { store, updateUser } from '../store'
import { push } from '@saber2pr/router'

export const useUserUpdate = (): [
  React.MutableRefObject<HTMLInputElement>,
  string,
  (event: React.FormEvent<HTMLFormElement>) => void
] => {
  const userIdInput = useRef<HTMLInputElement>()

  const [current, setUserId] = useState(store.getState().userId)

  useEffect(() =>
    store.subscribe(() => {
      setUserId(store.getState().userId)
    })
  )

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (userIdInput.current.value) {
      store.dispatch<updateUser>({
        type: 'updateUser',
        payload: userIdInput.current.value
      })
      push('/')
    }
  }

  return [userIdInput, current, onSubmit]
}
