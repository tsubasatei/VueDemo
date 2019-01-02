<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default { // 配置对象(与vue一致)
    data () { // 组件里必须写函数
      return {
        msg: 'Hello Vue Component'
      }
    }
  }
</script>

<style>
  .msg {
    color: red;
    fontSize: 30px
  }
</style>
