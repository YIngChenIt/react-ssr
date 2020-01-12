import React, {Component} from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-brand">React SSR</div>
                <ul className="navbar-nav">
                    <li>
                        <Link to="/">home</Link>
                        <Link to="/counter">counter</Link>
                    </li>
                </ul>
            </div>
        )
    }
}