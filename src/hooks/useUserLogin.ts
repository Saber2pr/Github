import { useRef } from 'react'
import { Local } from '../local'
import { push } from '@saber2pr/router'
import { store, updateUser } from '../store'

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
      store.dispatch<updateUser>({ type: 'updateUser', payload: username })
      push('/')
    }
  }

  return [usernameInput, passwordInput, onSubmit]
}
