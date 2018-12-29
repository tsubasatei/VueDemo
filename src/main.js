/**
 * 入口JS: 创建Vue实例
 */
import Vue from 'vue'
import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App      // 将组件APP映射成标签名APP
  },
  template: '<App/>'   // 使用组件标签，将标签APP所代表的内容匹配到el指定的div中
})
