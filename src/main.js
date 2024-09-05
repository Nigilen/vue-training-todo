import './assets/fonts.css';
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createMemoryHistory, createRouter } from 'vue-router';

import App from './App.vue';
import TodoList from './components/TodoList.vue';

const app = createApp(App);

const routes = [
  { path: '/', component: TodoList },
  { path: '/active', component: TodoList },
  { path: '/completed', component: TodoList },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

app.use(createPinia())
app.use(router)
app.mount('#app')