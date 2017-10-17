import { createStore, applyMiddleware } from 'redux';
import robotApp from '../reducers'
// Logger with default options
import logger from 'redux-logger'

const store = createStore( robotApp, 
	applyMiddleware(logger)
	)

export default store;