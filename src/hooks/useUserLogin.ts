import { useEffect, useRef } from 'react'
import { Local } from '../local'
import { push } from '@saber2pr/router'

export const useUserLogin = (): [
  React.MutableRefObject<HTMLInputElement>,
  React.MutableRefObject<HTMLInputElement>
] => {
  const usernameInput = useRef<HTMLInputElement>()
  const passwordInput = useRef<HTMLInputElement>()

  useEffect(() => {
    const username = usernameInput.current.value
    const password = passwordInput.current.value

    Local.saveUserAuth(username, password)
    push('/')
  })

  return [usernameInput, passwordInput]
}
