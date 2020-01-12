import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../store/actions/home'
class Home extends Component {
    componentDidMount() {   
        if (this.props.list.length === 0) { // 如果服务端没有拿到数据的时候，要通过客户端的方式获取
            this.props.getHomeList()
        }
    }
    render() {
        return (
            <>
                <ul>
                    {
                        this.props.list.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))
                    }
                </ul>
            </>
        )
    }
}
Home = connect(
    state => state.home,
    actions,
)(Home)
Home.loadData = function (store) { // 加载数据的方法
    // diapatch方法的返回值就是派发的action，最终返回一个promise
    return store.dispatch(actions.getHomeList())
}
export default Home