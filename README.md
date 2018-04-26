# vue组件库开发

组件库开发的目的：现在公司小项目可能会比较多，虽然用的element ui 但是还有一部分会根据自身需要进行封装增强或则针对业务化公用的封装，这样一来就会存在以下几个问题：

1. 每个项目中都有部分通用公用的组件，要么都copy一次
2. 维护困难，如果有bug或则新增功能，所有项目都需要重新copy一次

如果不分那么细致的话，可以连同工具类一起发布到npm中，只要所有项目依赖该组件库，就能解决上面的维护问题。

依照够用原则，放弃了element ui的构建方式，原因是学习成本比较高，后来发现 iview 组件库的方式和vue-cli生成的配置差不多，就依此为参考进行开发环境的搭建；

## 环境搭建思路
使用vue-cli为基础，安装好后，再修改配置文件；
百度看了好多讲解打包组件的方式，但是都是很简单配置和vue-cli脱节的的开发方式，可能学习成本来说会让人摸不着头脑。 参考了一些开源框架，最后终于大概弄明白了一些概念：

- 开发环境和vue-cli默认生成的配置类似
- 不同的是 组件的打包，要打包成js文件 和 css文件。
- 发布到npm的内容是.npmignore 和 package.json决定的

以上几点明白了。就可以尝试搭建了;

> **搭建过程请参考:**
https://zq99299.gitbooks.io/vue-note/content/chapter/vu_components_lib/

> **npm相关请参考：**
https://zq99299.gitbooks.io/gitbook-guide/content/chapter/node_npm.html#如果出现命令无效

> **第一个练手组件库：**
https://www.npmjs.com/package/tlz-vue-components-lib
由于是公司内部项目，所以这里没有源代码公开

## 入口命令

* dev:examples 开发环境下运行
* build:prodLib 组件打包成js
* build:prodStyl css打包

## 关于工具类打包问题

在实际使用过程中；我把写好的工具类放在`src/utils`中，在打包组件的时候并没有对该文件夹下的文件做任何的操作
在vue全家桶项目中使用的时候，打包会出现以下的错误
```
ERROR in static/js/vendor.054b63dba333824e79d5.js from UglifyJs
Unexpected token: name (AxiosHttp) [./~/vue-components-lib/lib/utils/http/AxiosHttp.js:18,0][static/js/vendor.054b63dba333824e79d5.js:13109,6]
```
 该错误的原因是：可能需要用babel进行打包转换才能直接使用；在这个版本中，我还不知道怎么去使用babel；
 临时的解决方案：在vue-cli项目中babel配置的地方，加上该工具类的目录，让vue-cli打包的时候进行转换;
 有会的朋友欢迎提交pr；
 ```
  {
         test: /\.js$/,
         loader: 'babel-loader',
         include: [resolve('src'), resolve('test'),resolve('node_modules/vue-components-lib/lib/utils')]
       },
 ```

## 更新记录

### 0.0.5 - 2017-12-27
在 build/buildProdLib.js 中增加copy src/utils 目录的功能，把一些常用的封装好的工具类打包发布
