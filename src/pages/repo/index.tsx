import React from 'react'
import { useIndex, useUserRopesPage } from '../../hooks'
import { Link } from '@saber2pr/router'
import { store, A } from '../../store'
import { RoutesBar, IndexBar, Svg, Label } from '../../components'
import './style.less'

const gotoUsersFrom = (title: string, url: string) => () => {
  store.dispatch<A.updateUserForm>({
    type: 'updateUserForm',
    payload: {
      title,
      url
    }
  })
}

export const Repo = () => {
  const [index, last, next] = useIndex()
  const repos = useUserRopesPage(store.getState().userId, index)
  return (
    <>
      <header>
        <span className="title">Repository</span>
        <Link className="right" to="/find">
          <Svg.Search />
        </Link>
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
                    {repo.fork && <Label>forked</Label>}
                  </a>
                </dt>
                <dd>{repo.description}</dd>

                <dd>
                  <nav>
                    <Link
                      to="/usersFrom"
                      onClick={gotoUsersFrom('Stargazers', repo.stargazers_url)}
                    >
                      <u>stars</u>
                      <Label>{repo.stargazers_count}</Label>
                    </Link>
                    <Link to="">
                      forks<Label>{repo.forks_count}</Label>
                    </Link>
                  </nav>
                </dd>
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
