import React, { useState, useEffect } from 'react'
import { Events } from '@saber2pr/types-github-api'
import { Request } from '../../request'
import { store } from '../../store'
import { RoutesBar } from '../../components'
import './style.less'

const useUserEvents = (userId: string = 'saber2pr') => {
  const [events, setEvents] = useState<Events>([])
  useEffect(() => {
    Request.Github.getUserEvents(userId).then(setEvents)
  }, [userId])
  return events
}

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