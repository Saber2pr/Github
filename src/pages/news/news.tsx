import React, { useState } from 'react'
import { FootBar } from '../../components/footBar/footBar'
import { getUserEvents } from '../../request/github'
import { Events } from '@saber2pr/types-github-api'
import './news.less'

const useUserEvents = (userId: string) => {
  const [events, setEvents] = useState<Events>([])
  getUserEvents(userId).then(setEvents)
  return events
}

export const News = ({ userId = 'saber2pr' }: { userId?: string }) => {
  const events = useUserEvents(userId)
  return (
    <>
      <header>News</header>
      <main className="news">
        <ul>
          {events.map(event => (
            <li className="item">
              <dl>
                <dt>
                  <strong>{event.type}</strong>
                </dt>
                <dd>{event.repo.name}</dd>
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
