const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//基本配置
const config = {
  target:'web',//web为target的默认值
  entry:path.join(__dirname,'src/app.js'),
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist')
  },
  plugins:[
    //自动清理插件:每次构建前清理 /dist 文件夹
    new CleanWebpackPlugin(['dist']),
    new HTMLPlugin({
      filename:"index.html",
      template:"./index.html",
      inject:"body"
      //minify:true压缩html文件
    })
  ]
}

module.exports = config;
