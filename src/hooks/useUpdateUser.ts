import { useRef, useState, useEffect } from 'react'
import { store } from '../store'

export const useUpdateUser = (): [
  React.MutableRefObject<HTMLInputElement>,
  string
] => {
  const userIdInput = useRef<HTMLInputElement>()

  const [current, setUserId] = useState(store.getState().userId)

  useEffect(() =>
    store.subscribe(() => {
      setUserId(store.getState().userId)
    })
  )

  return [userIdInput, current]
}
