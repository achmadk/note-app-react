import {createStore, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

import noteReducers from './notes'

import {getNotes} from 'actions/notes'

const middleware = applyMiddleware(promise(), thunk, createLogger()),
store = createStore(noteReducers, middleware)

export default store
