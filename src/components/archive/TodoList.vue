<script setup>
  import { ref, computed, reactive } from 'vue';
  import { useTodoStore } from '@/stores/storeTodos';
  import TodoItem from './TodoItem.vue';

  const { todos } = useTodoStore();

  const activeTodo = computed(() => {
    return todos.filter((todo) => !todo.completed)
  })

  const completedTodo = computed(() => {
    return todos.filter((todo) => todo.completed)
  })

  const currentTab = ref('InProgress');

  const tabs = reactive({
    InProgress: activeTodo,
    Done: completedTodo
  })

  function setCurentTab(index) {
    currentTab.value = index
  }

</script>


<template>
  <div class="tabs-buttons">
    <button 
      type="button"
      v-for="(_, index) in tabs"
      :key="index"
      @click="setCurentTab(index)"
    >
      {{ index }}
    </button>
  </div>

  
  <ul class="tabs-content">
    <TodoItem 
      v-for="(item) in tabs[currentTab]"
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