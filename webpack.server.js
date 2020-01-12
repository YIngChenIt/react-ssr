const path = require('path')
const nodeExterbal = require('webpack-node-externals')
const merge = require('webpack-merge')
const base = require('./webpack.base')
module.exports = merge(base, {
    target: 'node', //打包出来文件运行的环境
    entry: './src/server/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'server.js'
    },
    externals: [nodeExterbal()], // 负责检测全部引入的node核心模块，不把核心模块进行打包
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
})