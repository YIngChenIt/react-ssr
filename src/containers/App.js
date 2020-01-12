import React, { Component } from 'react'
import Header from '../components/Header'
import { renderRoutes, matchRoutes } from 'react-router-config'
export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    { renderRoutes(this.props.route.components) }
                </div>
            </>
        )
    }
}