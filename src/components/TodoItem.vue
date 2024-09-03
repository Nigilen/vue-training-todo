<script setup>
import IconCross from '@/components/icons/IconCross.vue';
import { useTodoStore } from '@/stores/todos';

const { removeTodo } = useTodoStore();

const props = defineProps({
  text: String,
  checked: Boolean,
  id: Number
})

const todoCheck = defineModel();

function toggleTodo() {
  todoCheck.value = !todoCheck.value
}

</script>

<template>
  <li>
    <input type="checkbox" v-bind="props" :checked="todoCheck" @change="toggleTodo">
    <label :for="props.id">{{ props.text }}</label>
    <button @click="removeTodo(props.id)">
      <IconCross />
    </button>
  </li>
</template>

<style scoped>

  li {
    display: flex;
    gap: 20px;
  }

  button {
    padding: 0;
    border: none;
    min-width: 15px;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    background-color: transparent;
    margin-left: auto;
  }

  input:checked + label {
    text-decoration:line-through;
    color: #d3d3d3;
  }
</style>