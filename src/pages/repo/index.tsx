import React from 'react'
import { useIndex, useUserRopesPage } from '../../hooks'
import { Anchor } from '@saber2pr/router'
import { store } from '../../store'
import { RoutesBar, IndexBar, Svg } from '../../components'
import './style.less'

export const Repo = () => {
  const [index, last, next] = useIndex()
  const repos = useUserRopesPage(store.getState().userId, index)
  return (
    <>
      <header>
        <span className="title">Repository</span>
        <Anchor className="right" href="/find">
          <Svg.Search />
        </Anchor>
      </header>

      <main className="repository">
        <ul className="list">
          {repos.map(repo => (
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
