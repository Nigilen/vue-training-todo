import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue';

export const useTodoStore = defineStore('todos', () => {

  const todos = ref(
    JSON.parse(localStorage.getItem('TODOS') || '[]')
  )
  
  const inputValue = ref('');

  function addItem() {
    todos.value.push({
      text: inputValue.value,
      completed: false
    })
    inputValue.value = ''
  }

  function removeTodo(id) {
    todos.value.splice(id, 1);
  }

  watchEffect(() => {
    localStorage.setItem('TODOS', JSON.stringify(todos.value))
  })

  return { todos, addItem, removeTodo, inputValue }
})
