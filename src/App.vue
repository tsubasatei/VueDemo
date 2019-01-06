<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"/>
        <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
        <todo-footer :todos="todos" :deleteCompletedTodos="deleteCompletedTodos" :selectAllTodos="selectAllTodos"/>
      </div>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  export default {
    data () {
      return {
        todos: [
          {title: '吃饭', completed: false},
          {title: '睡觉', completed: true},
          {title: 'coding', completed: false}
        ]
      }
    },
    methods: {
      // 添加任务
      addTodo (todo) {
        this.todos.unshift(todo)
      },

      // 删除任务
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },

      // 删除所有选中的todo
      deleteCompletedTodos () {
        this.todos = this.todos.filter(todo => !todo.completed)
      },

      // 全选/全不选
      selectAllTodos (check) {
        this.todos = this.todos.forEach(todo => todo.completed = check)
      }
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
