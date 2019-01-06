<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
    /* eslint-disable no-multi-spaces */
    export default {
      props: {
        todo: Object,
        index: Number,
        deleteTodo: Function
      },
      data () {
        return {
          bgColor: 'white', // 默认的背景颜色
          isShow: false     // 按钮默认是否显示
        }
      },
      methods: {
        // 删除任务
        deleteItem () {
          const {todo, index, deleteTodo} = this
          if (window.confirm(`确定删除${todo.title}吗？`)) {
            deleteTodo(index)
          }
        },

        // 样式修改
        handleEnter (isEnter) {
          if (isEnter) {
            this.bgColor = '#aaaaaa'
            this.isShow = true
          } else {
            this.bgColor = 'white'
            this.isShow = false
          }
        }
      }
    }
</script>

<style>

</style>
