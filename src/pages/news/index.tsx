import React from 'react'
import { useStore } from '../../store'
import { RoutesBar, Label } from '../../components'
import { useUserEvents } from '../../hooks'
import './style.less'
import { timeDelta } from '../../utils'

export const News = () => {
  const [{ userId }] = useStore()
  const events = useUserEvents(userId)
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
                  <Label>
                    {timeDelta(new Date().toISOString(), event.created_at)}
                  </Label>
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
