import React from 'react'

export interface InputHistory {
  listId: string
  history: string[]
}

export const InputHistory = ({ listId, history }: InputHistory) => (
  <datalist id={listId}>
    {history.map((h, i) => (
      <option value={h} key={h + i} />
    ))}
  </datalist>
)
