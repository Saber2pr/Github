import { Reducer } from '@saber2pr/redux'
import { State } from './state'
import * as A from './actions'

export const userId: Reducer<State['userId'], A.updateUser> = (
  state,
  action
) => {
  switch (action.type) {
    case 'updateUser':
      return action.payload
    default:
      return state
  }
}
