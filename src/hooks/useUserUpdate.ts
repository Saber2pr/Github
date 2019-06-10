import { useRef } from 'react'
import { useStore, A } from '../store'
import History from '@saber2pr/router'

export const useUserUpdate = (): [
  React.MutableRefObject<HTMLInputElement>,
  string,
  (event: React.FormEvent<HTMLFormElement>) => void
] => {
  const userIdInput = useRef<HTMLInputElement>()

  const [{ userId }, dispatch] = useStore()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (userIdInput.current.value) {
      dispatch<A.updateUser>({
        type: 'updateUser',
        payload: userIdInput.current.value
      })
      History.push('/profile')
    }
  }

  return [userIdInput, userId, onSubmit]
}
