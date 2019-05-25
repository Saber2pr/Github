import React from 'react'
import { useUserIdHistory } from '../../hooks'

/**
 * list: userIdHistory
 */
export const UserDataHistory = ({ userId }: { userId: string }) => {
  const userIdHistory = useUserIdHistory(userId)
  return (
    <datalist id="userIdHistory">
      {userIdHistory.map((h, i) => (
        <option value={h} key={h + i} />
      ))}
    </datalist>
  )
}
