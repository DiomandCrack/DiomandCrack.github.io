const webpack = require('webpack');

module.exports = {
        devtool: 'eval-source-map', //目前没看出有什么用 错误影射
        entry: __dirname + "/app/main.js", //唯一的入口文件
        output: {
            path: __dirname + "/public", //打包后的文件存放的地方
            filename: "bundle.js" //打包后输出文件的文件名
        },

        devServer: {
            contentBase: "./public/", //本地服务器所加载的页面的所在的页面
            historyApiFallback: true, //不跳转
            inline: true //实时刷新
        },
        module: {
            //loaders 调试外部的脚本工具,实现不同格式的文件的处理
            rules: [{
                    test: /(\.jsx|\.js)$/,
                    use: {
                        loader: "babel-loader"
                    },
                    exclude: /node_modules/
                },
                {
                    test: /\.json$/,
                    use: 'json-loader'
                        //json数据格式 中不能有注释 还要添加json-loader
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: "style-loader" },
                        {
                            loader: "css-loader",
                            options: {
                                modules: true
                            }
                        },
                        {
                            loader: "postcss-loader"
                        }
                    ]
                }
            ]
        },

        plugins: [
                new webpack.BannerPlugin('hello world')
            ]
            //插件 拓展webpack功能,在整个构建过程中生效,执行相关的任务
    }
    //__dirname是node.js中的一个全局变量,它指向当前执行脚本所在的目录
    //npm install --save-dev webpack-dev-server 浏览器监听修改

//babel 编译javascript的平台
//npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react 一次性安装多个包

//webpack 所有文件都当做模块处理
//npm install --save-dev style-loader css-loader css依赖
//Sass Loader sass
//npm install --save-dev postcss-loader autoprefixer postCss依赖(未来主流乾定)