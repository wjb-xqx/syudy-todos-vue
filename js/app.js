// var todos = [{id: 1, desc: '吃饭', completed: false}, {id: 2, desc: '睡觉', completed: false}]
// 1. 将数据todos数据渲染到页面中去
// 2. 其他任务看功能点分析中的需求

var vm = new Vue({
  el: '#app',
  data: {
      newtodo: '',
      toggleAll: false,
      todos: [ // 默认数据
          {id: 1, desc: '吃饭', completed: false},
          {id: 2, desc: '睡觉', completed: false},
          {id: 3, desc: '打豆豆', completed: false}
      ]
  },
  methods: {
      addTodo() {
          // 1. 判断输入框中不能为空
          if (!this.newtodo) return
          // 2. 添加todo
          var todoObj =  {id: +new Date() + Math.random(), desc: this.newtodo, completed: false}
          this.todos.push(todoObj)
          // 3. 置空输入框4
          this.newtodo = ''
      },
      delTodo(item) {
          // console.log(item)
          var index = this.todos.indexOf(item)
          console.log(index)
          // 删除
          this.todos.splice(index, 1)

      },
      toggleAllHandle() {
          // console.log(this.toggleAll)
          // 让this.todos中的每一项的completed变为this.toggleAll
          this.todos.forEach((item, index) => {
              item.completed = this.toggleAll
          })
      }
  }
})