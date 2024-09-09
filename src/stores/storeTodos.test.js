import { beforeEach, describe, expect, test } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import { useTodoStore } from './storeTodos'

const singleTodoMock = {
  id: 2,
  date: '06.09.2024',
  priority: 'low',
  title: 'second todo',
  description: 'description of the second todo',
  completed: true
}

const addTodoMock = {
  title: 'title test',
  description: 'description test',
  priority: 'low'
}

const todosMock = [
  {
    id: 2,
    date: '06.09.2024',
    priority: 'low',
    title: 'second todo',
    description: 'description of the second todo',
    completed: true
  },
  {
    id: 112,
    date: '05.09.2024',
    priority: 'medium',
    title: 'first todo',
    description: 'description of the first todo',
    completed: false
  }
]

describe('тест модального окна', () => {
  describe('добавление элемента', () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    })
    test("тест поля заголовка", () => {
      const store = useTodoStore();
      store.openModal();
      expect(store.titleValue).toBe('');
    });
    test("тест поля описания", () => {
      const store = useTodoStore();
      store.openModal();
      expect(store.descriptionValue).toBe('');
    });
    test("тест поля приоритета", () => {
      const store = useTodoStore();
      store.openModal();
      expect(store.priorityValue).toBe('');
    });
  })
  describe('редактирование элемента', () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    })
    test("тест поля заголовка", () => {
      const store = useTodoStore();
      store.todos = todosMock;
      store.openModal(singleTodoMock);
      expect(store.titleValue).toBe(todosMock[0].title);
    });
    test("тест поля описания", () => {
      const store = useTodoStore();
      store.todos = todosMock;
      store.openModal(singleTodoMock);
      expect(store.descriptionValue).toBe(singleTodoMock.description);
    });
    test("тест поля приоритета", () => {
      const store = useTodoStore();
      store.todos = todosMock;
      store.openModal(singleTodoMock);
      expect(store.priorityValue).toBe(singleTodoMock.priority);
    });
  })
  describe('очистка полей', () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    })
    test("тест поля заголовка", () => {
      const store = useTodoStore();
      store.todos = todosMock;
      store.openModal(singleTodoMock);
      store.openModal();
      expect(store.titleValue).toBe('');
    });
    test("тест поля описания", () => {
      const store = useTodoStore();
      store.todos = todosMock;
      store.openModal(singleTodoMock);
      store.openModal();
      expect(store.descriptionValue).toBe('');
    });
    test("тест поля приоритета", () => {
      const store = useTodoStore();
      store.todos = todosMock;
      store.openModal(singleTodoMock)
      store.openModal();
      expect(store.priorityValue).toBe('');
    });
  });
});

describe('тест работы с задачами', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('добавление задачи', () => {
    const store = useTodoStore();
    store.openModal();
    store.titleValue = addTodoMock.title;
    store.descriptionValue = addTodoMock.description;
    store.priorityValue = addTodoMock.priority;
    store.addItem();
    expect(store.todos.some((todo) => todo.title === 'title test')).toBe(true);
  });
  
  test('удаление задачи', () => {
    const store = useTodoStore();
    expect(store.todos.length).toBe(3);
    store.removeTodo(2);
    expect(store.todos.length).toBe(2);
  });
  
  test('редактирование задачи', () => {
    const store = useTodoStore();
    store.openModal(112);
    store.titleValue = 'fake title';
    store.descriptionValue = 'fake description';
    store.priorityValue = 'medium';
    store.editItem(112);
    expect(store.todos.some((todo) => todo.title === 'fake title')).toBe(true);
  });
  
  test('переключение задачи', () => {
    const store = useTodoStore();
    store.todos = todosMock;
    const someTodo = store.todos.find((todo) => todo.id === 2);
    expect(someTodo.completed === true).toBe(true);
    store.toggleTodo(2);
    expect(someTodo.completed === false).toBe(true);
    store.toggleTodo(2);
    expect(someTodo.completed === true).toBe(true);
  })
});
