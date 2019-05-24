import React, { useState, useRef, useEffect } from 'react'
import { Search, Repository } from '@saber2pr/types-github-api'
import { useIndex } from '../../hooks'
import { Request } from '../../request'
import { FootBar } from '../../components/footBar/footBar'
import { push } from '@saber2pr/router'

const useSearch = (
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

export const FindRepo = () => {
  const [index, last, next] = useIndex()
  const [searchInput, result, search] = useSearch(index)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    search()
  }

  const onBlur = () => searchInput.current.value || push('/repo')

  return (
    <>
      <header>
        <form onSubmit={onSubmit}>
          <input type="text" ref={searchInput} onBlur={onBlur} autoFocus />
          <button>search</button>
        </form>
      </header>

      <main>
        <ul className="list">
          {result.items.map(repo => (
            <li className="item" key={repo.id}>
              <dl>
                <dt>
                  <a href={repo.html_url}>
                    <strong>{repo.name}</strong>
                  </a>
                </dt>
                <dd>{repo.description}</dd>
              </dl>
            </li>
          ))}
        </ul>

        <nav>
          <button onClick={last}>last</button>
          <button onClick={next}>next</button>
        </nav>
      </main>

      <footer>
        <FootBar />
      </footer>
    </>
  )
}
