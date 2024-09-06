<script setup>
import { useTodoStore } from '@/stores/storeTodos';

const { openModal } = useTodoStore();


</script>

<template>

  <button class="button button--add" @click="openModal">Добавить задачу</button>

</template>

<style scoped>

.button--add {
  width: 100%;
  padding-block: 10px;
  justify-self: center;
  border: 1px solid #E0E0E0;
  border-radius: 7px;
  line-height: 20px;
  margin-block-end: 40px;
}

</style>