/**
 *
 * <pre>
 *  Version         Date            Author          Description
 * ---------------------------------------------------------------------------------------
 *  1.0.0           2017/07/25     zhuqiang        -
 * </pre>
 * @author zhuqiang
 * @version 1.0.0 2017/7/25 13:54
 * @date 2017/7/25 13:54
 * @since 1.0.0
 */
import 'core-js/fn/array/find-index'

import Hello from './components/Hello'
let tlzVueElUi = {
  Hello
}

const install = function (Vue, opts = {}) {
  Object.keys(tlzVueElUi).forEach((key) => {
    Vue.component(key, tlzVueElUi[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(tlzVueElUi, {install})
// module.exports = Object.assign(tlzVueElUi, {install})   // eslint-disable-line no-undef
