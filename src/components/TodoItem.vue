<script setup>
import IconTrash from '@/components/icons/IconTrash.vue';
import { useTodoStore } from '@/stores/storeTodos';

const { openModal, removeTodo, toggleTodo } = useTodoStore();

const props = defineProps({
  id: Number,
  date: String,
  priority: String,
  title: String,
  description: String,
  checked: Boolean
})


function editTodo(evt, props) {
  if(evt.target.tagName === 'P') {
    openModal(props)
  }
}

</script>

<template>
  <li class="todo" :class="`todo--${props.priority}`" @click="editTodo($event, props)">
    <label class="todo__title" :for="props.id">
      <input 
        class="todo__checkbox visually-hidden" 
        type="checkbox" 
        :id="props.id" 
        :checked="props.checked" 
        @change="toggleTodo(props.id)" />
      <span></span>
      {{ props.title }}
    </label>
    <p class="todo__description">
      {{ props.description }}
    </p>
    <p class="todo__date">{{ props.date }}</p>
    <button class="todo__remove-btn" @click="removeTodo(props.id)">
      <IconTrash />
    </button>
  </li>
</template>

<style scoped>
  .todo {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(2, auto);
    gap: 20px;
    cursor: pointer;
    color: #202124;
    border: 1px solid #E0E0E0;
    border-radius: 7px;
    padding: 14px;
    transition-duration: .3s;
  }

  .todo:hover {
    box-shadow: 0px 4px 4px -2px #2021243d;
  }

  .todo:hover .todo__date {
    opacity: 1;
  }

  .todo--high {
    border-color: #FFAEAE;
  }
  
  .todo--medium {
    border-color: #59E1FF;
  }

  .todo:hover .todo__remove-btn {
    opacity: 1;
  }

  .todo__checkbox {
    grid-row: 1 / 1;
    grid-column: 1 / 2;
  }

  .todo__checkbox + span {
    border: 2px solid #757575;
    border-radius: 3px;
    inline-size: 18px;
    block-size: 18px;
    display: flex;
  }
  .todo__checkbox:checked + span::after {
    content: '';
    border-radius: 1px;
    display: block;
    margin: auto;
    inset-block-start: 0;
    inset-inline-start: 0;
    inline-size: 60%;
    aspect-ratio: 1 / 1;
    background-color: #757575;
  }

  .todo__title {
    grid-row: 1 / 1;
    grid-column: 1 / 4;

    display: flex;
    gap: 14px;

    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
  }
  
  .todo__description {
    grid-row: 2 / 2;
    grid-column: 1 / 4;
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.4;
  }

  .todo__date {
    grid-row: 3 / 3;
    grid-column: 1 / 1;
    color: #CFCFCF;

    font-size: 0.625rem;
    line-height: 2;
    margin: 0;
    opacity: 0;
    transition-duration: .3s;
  }

  .todo__priority {
    grid-row: 3 / 3;
    grid-column: 3 / 4;

    font-size: 0.625rem;
    line-height: 2;
    margin: 0;
  }

  .todo__remove-btn {
    opacity: 0;
    grid-row: 1 / 1;
    grid-column: 3 / 4;
    padding: 0;
    min-width: 18px;
    margin-left: auto;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition-duration: .3s;
    fill: #CFCFCF;
    stroke: #CFCFCF;
  }

  .todo__remove-btn:hover {
    fill: #6e6e6e;
    stroke: #6e6e6e;
  }

  .todo:checked + .todo__title {
    text-decoration:line-through;
    color: #d3d3d3;
  }
</style>