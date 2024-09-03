<script setup>
import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'
// import ModalAddTodo from './components/ModalAddtodo.vue';
</script>

<template>
  <header>
    <!-- <ModalAddTodo /> -->
    <AddTodo />
  </header>
  <main>
    <TodoList />
  </main>
</template>

<style scoped>
header {
  padding: 20px 0 50px 0;
}
</style>