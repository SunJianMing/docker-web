const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
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
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'../public/index.html'),
            filename:'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    mode:"production"
}