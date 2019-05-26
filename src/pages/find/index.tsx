import React from 'react'
import { useIndex, useSearch } from '../../hooks'
import { push } from '@saber2pr/router'
import { Svg, RoutesBar, IndexBar } from '../../components'
import { throttle } from '../../utils'
import './style.less'

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
