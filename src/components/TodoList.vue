<script setup>
  import { useRoute } from 'vue-router';
  import { useTodoStore } from '@/stores/storeTodos';
  import TodoItem from './TodoItem.vue';

  const store = useTodoStore();
  const route = useRoute();
</script>

<template>
  <ul class="tabs-content">
    <TodoItem 
      v-for="(item) in store.tabs[route.path]"
      :id="item.id"
      :date="item.date"
      :title="item.title"
      :description="item.description"
      :key="item.id"
      :priority="item.priority"
      :checked="item.completed"
    >
    </TodoItem>
  </ul>
</template>

<style scoped>
  .tabs-buttons {
    margin-block-end: 50px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .tabs-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>