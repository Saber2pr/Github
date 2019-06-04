import { useRef } from 'react'
import { Local } from '../local'
import History from '@saber2pr/router'
import { store, A } from '../store'

export const useUserLogin = (): [
  React.MutableRefObject<HTMLInputElement>,
  React.MutableRefObject<HTMLInputElement>,
  (event: React.FormEvent<HTMLFormElement>) => void
] => {
  const usernameInput = useRef<HTMLInputElement>()
  const passwordInput = useRef<HTMLInputElement>()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const username = usernameInput.current.value
    const password = passwordInput.current.value

    if (username && password) {
      Local.saveUserAuth(username, password)
      store.dispatch<A.updateUser>({ type: 'updateUser', payload: username })
      History.push('/profile')
    }
  }

  return [usernameInput, passwordInput, onSubmit]
}
