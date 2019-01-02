/**
 * 入口JS: 创建Vue实例
 */
import Vue from 'vue'
import App from './App.vue'

/* eslint-disable no-new */
/* eslint-disable no-multi-spaces */
new Vue({
  el: '#app',
  components: {
    App   // 将组件APP映射成标签名APP
  },
  template: '<App/>'  // 指定需要渲染到页面的模板: 使用组件标签，将标签APP所代表的内容匹配到el指定的div中
})
