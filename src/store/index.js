import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'

export function getServerStore() {
    return createStore(reducers, applyMiddleware(thunk, logger))
}

export function getClientStore() {
    let initState = window.context.state //如果服务端请求了有数据，用服务端的状态树
    return createStore(reducers, initState, applyMiddleware(thunk, logger))
}