import {createStore, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import noteReducers from './notes'

import {getNotes} from 'actions/notes'

const middleware = applyMiddleware(promise(), thunk, logger()),
store = createStore(noteReducers, middleware)

export default store
