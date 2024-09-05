<script setup>
  import ButtonAddTodo from './components/ButtonAddTodo.vue';
  import ModalTodo from './components/modal/ModalTodo.vue';
  import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav class="todos-nav">
      <RouterLink class="todos-nav__link" to="/">Все</RouterLink>
      <RouterLink class="todos-nav__link" to="/active">В работе</RouterLink>
      <RouterLink class="todos-nav__link" to="/completed">Завершенные</RouterLink>
    </nav>
  </header>
  <main class="main">
    <section class="todos">
      <ButtonAddTodo />
      <RouterView />
    </section>
  </main>
  <ModalTodo />
</template>

<style scoped>

  header {
    padding-block: 50px;
    padding-inline-start: 10px;
    position: fixed;
    inset-block-start: 0;
    inset-block-end: 0;
  }

  .todos {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .todos-nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .main {
    inline-size: 100%;
    margin-inline-start: 160px;
  }
  
  .todos-nav__link {
    inline-size: min-content;
    text-wrap: nowrap;
    padding: 5px;
    text-decoration: none;
    font: inherit;
    color: #868686;
    position: relative;
  }

  .todos-nav__link::after {
    content: '';
    display: block;
    inline-size: 0;
    block-size: 1px;
    background-color: #202124;
    transition-duration: .3s;
  }

  .todos-nav__link:hover {
    color: #202124;;
  }

  .todos-nav__link:hover::after {
    block-size: 1px;
    inline-size: 100%;
  }

</style>