import React from 'react'
import { StaticRouter } from "react-router-dom"
import { renderToNodeStream } from 'react-dom/server'
import routes from '../routes'
import { Provider } from 'react-redux'
import { getServerStore } from '../store'
import { renderRoutes, matchRoutes } from 'react-router-config'


export default function (req, res) {
    let context = {}
    let store = getServerStore()
    let matchedRoutes = matchRoutes(routes, req.path)
    let promises = []
    matchedRoutes[0].route.components.forEach(route => {
        if (route.loadData) { // 需要加载数据
            promises.push(route.loadData(store))
        }
    })
    Promise.all(promises).then(() => { // 当全部匹配组件的数据回来之后才渲染页面
        let stream = renderToNodeStream(
            <Provider store={store}>
                <StaticRouter context={context} location={req.path}>
                    {renderRoutes(routes)}
                </StaticRouter>
            </Provider>
        )
        if (context.notFound) {
            res.statusCode = 404
        }
        res.write(`<!DOCTYPE html><html><head><title>React SSR</title></head><body><div id='root'>`);
        stream.pipe(res, { end: false });
        stream.on('end', () => {
            res.write(`
                </div>
                <script>
                    window.context = {
                        state: ${JSON.stringify(store.getState())}
                    }
                </script>
                <script src="/client.js"></script>
                </body>
                </html>`);
            res.end();
        });
    })
}