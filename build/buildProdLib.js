require('./check-versions')()

// 这里的环境改成我们自己的
process.env.NODE_ENV = 'prodlib'

var ora = require('ora')
var rm = require('rimraf')    // 这个查了下，大概是清理文件的插件
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
// 这里同理复制一份 webpack.prod.conf.js 修改成 webpack.prodLib.conf.js
var webpackConfig = require('./webpack.prodLib.conf')

var spinner = ora('building for production...')
spinner.start()

// 也就是说，这里帮我们清理了以下目录
// 然而这里我们只需要清空自己的打包目录就行了
// 之前在config/index.js中没有定义多的变量，在这里要用到了，需要添加上
//  assetsRoot: path.resolve(__dirname, '../lib'),
rm(path.join(config.buildProdLib.assetsRoot), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: 构建的文件是js库的文件\n' +
      '  因此该库能被引用使用\n'
    ))
  })
})
