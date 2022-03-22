import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools}from 'redux-devtools-extension'
import {cityReducer} from './reducers/cityReducer';
import promise from "redux-promise-middleware"
import logger from 'redux-logger'

const rootReducer = combineReducers({cityReducer})
const allExtensions = composeWithDevTools(applyMiddleware(thunk,promise,logger))
const myStore = createStore(rootReducer,allExtensions)

export default myStore;