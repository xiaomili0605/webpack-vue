/*
    1 webpack 配置vue单页面应用,webpack打包的过程称为“构建”
    创建文件夹wbp-vue，一般在目录下有一个src文件夹，用于存放打包前的源文件；src目录下面有一个main.js是vue的主入口文件


    真实项目中我们不是单纯使用vue，而是结合webpack等打包工具；因为webpack可以更方便的实现模块化，导入导出依赖，而且使用webpack配合vue-loader，我们的组件可以写成vue文件


    1 创建文件 wbp-vue

    2 webpack.config.js 手动创建文件

    3 npm init -y  生成package.json

    4 npm install webpack-cli webpack --dev

    5 npm install webpack-dev-server --save--dev

    6 webpack配置vue通常项目结构：
      6.1 新建src文件夹，用于存放打包前的源文件（对应的还有一套打包后的文件）
      6.2 src目录下新建index.html
      6.3 src目录下新建main.js(是vue的主入口文件)
      6.4 src目录下新建components文件夹
     
    7 npm i webpack-dev-server --save--dev  配置开发依赖
      并在webpack.json的test下面增加："dev": "webpack-dev-server"

    8 配置loader
      8.1 npm install babel-core babel-loader@7.1.5 babel-preset-env --dev
      8.2 npm install css-loader style-loader --dev
      8.3 npm install less less-loader --dev
      8.4 npm install url-loader --dev
      8.5 npm install vue-loader --dev
      8.6 npm i vue --dev
      8.7 npm i webpack-dev-server --dev


    9 HtmlWebpackPlugin 
      npm install html-webpack-plugin --dev

    10 npm i vue-loader vue-template-compiler --dev


    11 npm i vue-router --save

    12 在webpack.json的dev下面增加： "build": "webpack"
*/ 

