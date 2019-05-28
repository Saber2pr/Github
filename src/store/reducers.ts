import { Reducer } from '@saber2pr/redux'
import { State } from './state'
import { A } from './actions'

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

export const error: Reducer<State['error'], A.throwError> = (state, action) => {
  switch (action.type) {
    case 'throwError':
      return action.payload
    default:
      return state
  }
}

export const usersForm: Reducer<State['usersForm'], A.updateUserForm> = (
  state,
  action
) => {
  switch (action.type) {
    case 'updateUserForm':
      return action.payload
    default:
      return state
  }
}
