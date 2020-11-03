var app = new Vue({
    el: '#app',
    data: {
        newItem: "",
        todos: []
    },
    methods: {
        addItem: function (event) {
            if (this.newItem == '') return;
            var todo = {
                item: this.newItem,
                isDone: false
            };
            this.todos.push(todo);
            this.newItem = '';
            this.saveTodo()　//ブラウザに保存
        },
        deleteItem: function (index) { 
            this.todos.splice(index, 1) 
            this.saveTodo()　//ブラウザに保存
        },
        saveTodo: function () {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deleteChecked: function () {
            this.todos = this.todos.filter(function (todo) {
                return todo.isDone === false;
            })
        },
        loadTodo: function () {
            this.todos = JSON.parse(localStorage.getItem('todos'));
            if (!this.todos) {
                this.todos = [];
            }
        },
    },
    mounted: function(){　
        this.loadTodo();
    },
})