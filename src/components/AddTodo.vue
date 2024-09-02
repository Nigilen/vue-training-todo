<script setup>
import { useTodoStore } from '@/stores/todos';
import { ref, onMounted } from 'vue';

const store = useTodoStore();
const { addItem } = useTodoStore();

const input = ref(null);

onMounted(() => {
  input.value.focus();
})

</script>

<template>
  <form @submit.prevent="addItem">
    <input type="text" v-model="store.inputValue" ref="input">
    <button type="submit">+</button>
  </form>
</template>

<style scoped>

form {
  display: flex;
  gap: 20px;
}

input {
  padding: 5px;
  min-width: 400px;
}

button {
  width: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  cursor: pointer;
  border: none;
  font-size: 2rem;
}

</style>