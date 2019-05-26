import { createStore, combineReducers } from '@saber2pr/redux'
import * as reducers from './reducers'
import { State } from './state'

export const store = createStore(combineReducers(reducers), State)

export * from './actions'
