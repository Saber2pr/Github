import React, { useState, useRef, useEffect } from 'react'
import { Search, Repository } from '@saber2pr/types-github-api'
import { useIndex } from '../../hooks'
import { Request } from '../../request'
import { push } from '@saber2pr/router'
import { Svg, RoutesBar, IndexBar } from '../../components'
import { throttle } from '../../utils/throttle'
import './style.less'

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

export const Find = () => {
  const [index, last, next] = useIndex()
  const [searchInput, result, search] = useSearch(index)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    search()
  }

  const throReq = () => search()

  const onBlur = () => searchInput.current.value || push('/repo')

  return (
    <>
      <header>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            ref={searchInput}
            autoFocus
            onBlur={onBlur}
            onInput={() => throttle(throReq)}
            placeholder="search repository..."
          />
        </form>
      </header>

      <main className="find">
        <ul className="list">
          {result.items.map(repo => (
            <li className="item" key={repo.id}>
              <dl>
                <dt>
                  <span className="svg_book">
                    <Svg.Book />
                  </span>
                  <a href={repo.html_url}>
                    <strong>{repo.name}</strong>
                  </a>
                </dt>
                <dd>{repo.description}</dd>
              </dl>
            </li>
          ))}
        </ul>

        <IndexBar last={last} next={next} />
      </main>

      <footer>
        <RoutesBar />
      </footer>
    </>
  )
}
