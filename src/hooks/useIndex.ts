import { useState } from 'react'

export interface Last extends VoidFunction {}
export interface Next extends VoidFunction {}

export const useIndex = (start = 1): [number, Last, Next] => {
  const [index, setPageIndex] = useState(start)
  const last = () => setPageIndex(index - 1)
  const next = () => setPageIndex(index + 1)

  return [index, last, next]
}
