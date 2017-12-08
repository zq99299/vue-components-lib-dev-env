/**
 *
 * <pre>
 *  Version         Date            Author          Description
 * ---------------------------------------------------------------------------------------
 *  1.0.0           2017/07/25     zhuqiang        -
 * </pre>
 * @author zhuqiang
 * @version 1.0.0 2017/7/26 13:54
 * @date 2017/7/26 13:54
 * @since 1.0.0
 */
// 这个难道是一个es6的补丁？正常的vue-cli中已经包含了补丁了应该。所以这个暂时不知道去掉后怎么重现故障
import 'core-js/fn/array/find-index'

import Hello from './components/hello'
let VueComponentsLib = {
  Hello
}

const install = function (Vue, opts = {}) {
  Object.keys(VueComponentsLib).forEach((key) => {
    if (key !== 'install') {
      var component = VueComponentsLib[key]
      Vue.component(component.name, component)
    }
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 把 install方法添加到 VueComponentsLib 中
export default Object.assign(VueComponentsLib, {install})
// module.exports = Object.assign(tlzVueElUi, {install})   // eslint-disable-line no-undef
