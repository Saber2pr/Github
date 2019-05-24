import React, { useState, useEffect } from 'react'
import { FootBar } from '../../components/footBar/footBar'
import { Events } from '@saber2pr/types-github-api'
import './news.less'
import { Request } from '../../request'

const useUserEvents = (userId: string = 'saber2pr') => {
  const [events, setEvents] = useState<Events>([])
  useEffect(() => {
    Request.Github.getUserEvents(userId).then(setEvents)
  }, [userId])
  return events
}

export const News = ({ userId }: { userId?: string }) => {
  const events = useUserEvents(userId)
  return (
    <>
      <header>News</header>
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
        <FootBar />
      </footer>
    </>
  )
}
