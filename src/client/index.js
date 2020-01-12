import React from 'react'
import ReactDOM from 'react-dom'
import routes from '../routes'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'
import { renderRoutes } from 'react-router-config'

let store = getClientStore()
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))