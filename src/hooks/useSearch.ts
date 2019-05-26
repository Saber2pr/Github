import { Search, Repository } from '@saber2pr/types-github-api'
import { useState, useRef, useEffect } from 'react'
import { Request } from '../request'

export const useSearch = (
  page: number
): [
  React.MutableRefObject<HTMLInputElement>,
  Search<Repository>,
  VoidFunction
] => {
  const [result, setRepos] = useState<Search<Repository>>({
    items: []
  } as Search<Repository>)

  const searchInput = useRef<HTMLInputElement>()

  const search = () => {
    const query = searchInput.current.value
    if (query) {
      Request.Github.searchRepos(query, page)
        .then(result => setRepos(result))
        .then(() => window.scroll(0, 0))
    }
  }

  useEffect(() => search(), [page])

  return [searchInput, result, search]
}
