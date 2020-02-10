import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import movies from './reducers/movies';

const reducer = combineReducers({ movies });

export const store = createStore(reducer, applyMiddleware(thunk, logger));
