<script setup>
  import { useTodoStore } from '@/stores/storeTodos';

  const store = useTodoStore();
  const { addItem } = useTodoStore();
  
</script>

<template>
  <form @submit.prevent="addItem" class="add-todo">
    <fieldset class="add-todo__inputs">
      <input class="add-todo__title" type="text" v-model.trim="store.titleValue" required placeholder="Введите заголовок">
      <textarea class="add-todo__description" v-model.trim="store.descriptionValue" placeholder="Задача..."></textarea>
    </fieldset>
    <fieldset class="add-todo__bottom">
      <select class="add-todo__priority" v-model="store.priorityValue" required>
        <option disabled value="">приоритет</option>
        <option>low</option>
        <option>medium</option>
        <option>high</option>
      </select>
      <button class="add-todo__btn" type="submit">добавить</button>
    </fieldset>
  </form>
</template>

<style scoped>

.add-todo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

fieldset {
  margin: 0;
  padding: 0;
  border: 0;
}

.add-todo__inputs {
  display: flex;
  flex-direction: column;
  inline-size: 100%;
  gap: 13px;
}

.add-todo__bottom {
  display: flex;
  justify-content: space-between;
}

.add-todo__title {
  min-width: 400px;
  font-size: 1.25rem;
  color: inherit;
  border: none;
  background-color: transparent;
}

.add-todo__title:focus {
  outline: none;
}

.add-todo__description {
  color: inherit;
  font-family: inherit;
  border: none;
  background-color: transparent;
  height: auto;
  min-height: 50px;
  max-height: 200px; 
  overflow-y: auto;
}

.add-todo__description:focus {
  outline: none;
}

.add-todo__priority {
  border: 0;
  color: inherit;
  font-family: inherit;
  grid-column: 1 / 2;
  grid-row: 2 / 2;
}

.add-todo__priority:focus {
  outline: none;
}

.add-todo__btn {
  color: inherit;
  font-family: inherit;
  align-self: end;
  font-size: 0.875rem;
  color: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

</style>