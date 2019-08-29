// webpack 是基于node.js的，导出Commonjs的模块，导出一个对象
let HtmlWebpackPlugin = require('html-webpack-plugin');

//  vue + webpack 单页面应用需要安装：vue-loader vue-template-compiler 
let VueLoaderPlugin = require('vue-loader/lib/plugin'); //引入vue-loader plugin

module.exports = {
    entry: './src/main.js', // 配置打包的入口
    output: {
        path: __dirname + './dist', // 一般输出目录都叫dist或叫build
        filename: 'bundle.js' // 打包输出的文件名
    },
    devtool: 'eval-source-map', // 虚拟打包越详细，打包越慢
    devServer: {
        contentBase: './src',
        port: 8001,
        open: true, // 自动启动浏览器
        inline: true, // 文件内容修改，浏览器自动刷新
        historyApiFallback: true, // 当页面应用切路由不刷新（路由的history模式）
        proxy: {
            './api': {
                // 必用工作中: 和服务端同事联调时，你需要和服务端同事要开发机的ip或者域名（给域名要再次确认端口，域名有可能不是用的80或者443） 备注：http默认是80  https默认是443 开发机就是开发服务器，开发机器
                // 要问和服务端联调时，需要和要陪代理吗？代理到哪儿
                // 遇到./api代理到http://http://localhost:8000
                target: 'http://localhost:8000',
                changeOrigin: true, // target是域名的话，要设置为true
                secure: false // 不校验安全与否，其实就是校验服务器证书有没有过期，不校验即可，不管这个
            }
        }
    },


    // 配置loader
    module: {
        rules: [
            { // 配置babel: 把ES67转ES5，把jsx转成js
                test: '/\.js$/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                },
                exclude: /node_modules/ // 不处理node_modules中的东西
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif|woff|ttf)$/,
                use: 'url-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new VueLoaderPlugin() // 除了上面配置loader，这里还要用一个插件
    ]
}