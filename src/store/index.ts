import { createStore, combineReducers } from '@saber2pr/react-redux'
import * as reducers from './reducers'
import { State } from './state'

export const [Provider, useStore, store] = createStore(
  combineReducers(reducers),
  State
)

export * from './actions'
