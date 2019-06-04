import { useRef, useState, useEffect } from 'react'
import { store, A } from '../store'
import History from '@saber2pr/router'

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
      store.dispatch<A.updateUser>({
        type: 'updateUser',
        payload: userIdInput.current.value
      })
      History.push('/profile')
    }
  }

  return [userIdInput, current, onSubmit]
}
