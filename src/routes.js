import Home from './containers/Home'
import Counter from './containers/Counter'
import NotFound from './containers/NotFound'
import App from './containers/App.js'
export default [
    {
        path: '/',
        component: App,
        components: [ // 子路由
            {
                path: '/',
                component: Home,
                exact: true,
                key: '/',
                loadData: Home.loadData, //如果有这个配置项，表示需要异步加载数据
            },
            {
                path: '/counter',
                component: Counter,
                key: '/counter',
            },
            {
                component: NotFound,
                key: '/notFound',
            },
        ]
    }
]