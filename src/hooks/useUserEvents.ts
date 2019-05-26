import { useState, useEffect } from 'react'
import { Events } from '@saber2pr/types-github-api'
import { Request } from '../request'

export const useUserEvents = (userId: string) => {
  const [events, setEvents] = useState<Events>([])

  useEffect(() => {
    Request.Github.getUserEvents(userId)
      .then(setEvents)
      .catch(_ => _)
  }, [userId])

  return events
}
