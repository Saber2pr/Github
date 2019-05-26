import React from 'react'
import { store } from '../../store'
import { RoutesBar, CountLabel } from '../../components'
import { useUserEvents } from '../../hooks'
import './style.less'
import { timeDelta } from '../../utils'

export const News = () => {
  const events = useUserEvents(store.getState().userId)
  return (
    <>
      <header>
        <span className="title">News</span>
      </header>
      <main className="news">
        <ul className="list">
          {events.map(event => (
            <li className="item" key={event.id}>
              <dl>
                <dt>
                  <strong>{event.type}</strong>
                </dt>

                <dd>
                  <a href={'https://github.com/' + event.repo.name}>
                    {event.repo.name}
                  </a>
                </dd>
                <dd>
                  <CountLabel
                    count={timeDelta(
                      new Date().toISOString(),
                      event.created_at
                    )}
                  />
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <RoutesBar />
      </footer>
    </>
  )
}
