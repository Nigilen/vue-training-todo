<script setup>
import AddTodo from '@/components/AddTodo.vue'
import EditTodo from '@/components/EditTodo.vue';
import { useTodoStore } from '@/stores/storeTodos';

const store = useTodoStore();
const { closeModal } = useTodoStore();


</script>

<template>

  <Teleport to="body">
    <div 
      v-if="store.isOpenModal" 
      class="modal" 
      @click="(event) => closeModal(event)" 
      @keyup.escape="store.isOpenModal = false"
    >
      <div class="wrapper">
        <EditTodo v-if="store.isEdit" />
        <AddTodo v-else />
      </div>
    </div>
  </Teleport>

</template>

<style scoped>

.wrapper {
  background-color: #fff;
  padding: 20px 14px;
  border-radius: 7px;
  z-index: 19;
  min-width: 600px;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000080;
}

</style>