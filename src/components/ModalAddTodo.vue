<script setup>
import AddTodo from '@/components/AddTodo.vue'
import { ref } from 'vue';

const open = ref(false);

</script>

<template>

  <button @click="open = true">Open</button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div class="wrapper">
        <AddTodo />
        <button @click="open = false">Add</button>
      </div>
    </div>
  </Teleport>

</template>

<style scoped>

.wrapper {
  background-color: aliceblue;
  padding: 20px;
  border-radius: 20px;
  z-index: 19;
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