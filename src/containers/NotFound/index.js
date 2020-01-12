import React, {Component} from 'react'
class NotFound extends Component {
    componentDidMount() {
        console.log(this.props)
        if (this.props.staticContext) {
            this.props.staticContext.notFound = true
        }
    }
    render() {
        return (
            <div>404</div>
        )
    }
}

export default NotFound