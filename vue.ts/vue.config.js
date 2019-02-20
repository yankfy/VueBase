const isProduction = process.env.NODE_ENV == 'production' ? true : false;

// 不用每次饮用stylus函数 https://www.cnblogs.com/jjucap/p/10120396.html
var path = require('path')

module.exports = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'assets',
  indexPath: 'index.html',
  filenameHashing: true, //启用hash值
  productionSourceMap: false,
  configureWebpack: {
    module: {
      rules: [

      ]
    },
    // plugins:[]
  },
  chainWebpack: config => {
    // ie报错无效字符 添加该配置项 解决该问题
    config.module
      .rule('iview')
      .test(/iview.src.*?js$/)
      .use('babel')
      .loader('babel-loader')
      .end()
  },
  css: {
    modules: false, //true .module可去除
    extract: isProduction, //打包成一个css,
    loaderOptions: {
      stylus: {
        import: path.resolve(__dirname, './src/config/stylus/index.styl')
      },
    }
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    hot: true,
    open: true,
    proxy: process.env.VUE_APP_API_URL,
    // proxy: {
    //     '/api': {
    //         target: 'http://localhost:8080',
    //         pathRewrite: { '^/api': '' },
    //         changeOrigin: true,
    //         secure: false, // 接受 运行在 https 上的服务
    //     }
    // },
    overlay: {
      warnings: true,
      errors: true
    }
  },
}
