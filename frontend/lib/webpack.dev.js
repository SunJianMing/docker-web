
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'main.js'
    },
    module:{
        rules:[{
            test:/\.js$/,
            use:['babel-loader']
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }]
    },
    devServer:{
        contentBase:path.join(__dirname,'../dist'),
        port:8000,
        proxy:{
            '/api':{
                target:'http://localhost:3000'
            }
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'../public/index.html'),
            filename:"index.html"
        }),
        new CleanWebpackPlugin()
    ],
    mode:"development",
    devtool:"cheap-module-source-map"
}