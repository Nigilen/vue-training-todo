import { defineStore } from 'pinia'
import { ref, reactive, watchEffect, computed } from 'vue';

export const useTodoStore = defineStore('todos', () => {

  const todos = ref(JSON.parse(localStorage.getItem('TODOS')) || [])

  const activeTodo = computed(() => {
    return todos.value.filter((todo) => !todo.completed)
  })

  const completedTodo = computed(() => {
    return todos.value.filter((todo) => todo.completed)
  })

  const tabs = reactive({
    '/': todos,
    '/active': activeTodo,
    '/completed': completedTodo
  })

  const isOpenModal = ref(false);
  const isEdit = ref(false);
  
  const titleValue = ref('');
  const descriptionValue = ref('');
  const priorityValue = ref('');
  const idValue = ref('');

  function addItem() {
    todos.value.push({
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      priority: priorityValue.value,
      title: titleValue.value,
      description: descriptionValue.value,
      completed: false
    });
    isOpenModal.value = false;
    titleValue.value = '';
    descriptionValue.value = '';
  }

  function editItem(id) {
    const todo = todos.value.find((item) => item.id === id);
    todo.date = new Date().toLocaleDateString();
    todo.priority = priorityValue.value;
    todo.title = titleValue.value;
    todo.description = descriptionValue.value;
    isOpenModal.value = false;
    titleValue.value = '';
    descriptionValue.value = '';
    priorityValue.value = '';
  }

  function toggleTodo(id) {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
  

  function openModal(props) {
    titleValue.value = '';
    descriptionValue.value = '';
    priorityValue.value = '';
    isOpenModal.value = true;
    isEdit.value = false;

    if(props) {
      if(props.id) {
        isEdit.value = true;
        const todo = todos.value.find((item) => item.id === props.id);
        titleValue.value = todo.title;
        descriptionValue.value = todo.description;
        priorityValue.value = todo.priority;
        idValue.value = todo.id;
      }
    }
  }

  function closeModal(e) {
    if(e.target.classList.value === 'modal') {
      isOpenModal.value = false
    }
  }

  function removeTodo(id) {
    const index = todos.value.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.value.splice(index, 1);
    }
  }

  watchEffect(() => {
    localStorage.setItem('TODOS', JSON.stringify(todos.value))
  })

  return {
    toggleTodo,
    todos, 
    addItem, 
    removeTodo, 
    titleValue, 
    descriptionValue, 
    isOpenModal,
    openModal,
    closeModal, 
    priorityValue,
    completedTodo,
    activeTodo,
    tabs,
    isEdit,
    editItem,
    idValue
  }
})
