import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue';

export const useTodoStore = defineStore('todos', () => {

  const todos = ref(JSON.parse(localStorage.getItem('TODOS')) || [])
  
  const inputValue = ref('');

  function addItem() {
    todos.value.push({
      id: Date.now(),
      text: inputValue.value,
      completed: false
    })
    inputValue.value = ''
  }

  function removeTodo(id) {
    const index = todos.value.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      todos.value.splice(index, 1);
    }

  }

  watchEffect(() => {
    localStorage.setItem('TODOS', JSON.stringify(todos.value))
  })

  return { todos, addItem, removeTodo, inputValue }
})
