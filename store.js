import { action, observable, computed } from 'mobx';
import { persist, create } from 'mobx-persist';
import TodoItemModel from './models/TodoItemModel';

let store = null;

class Store {
  @persist('list')
  @observable
  todoItems = [];

  constructor(isServer) {}

  @action
  increaseCounter = () => {
    this.counter = this.counter + 1;
  };

  @action
  removeItem = item => {
    this.todoItems.splice(this.findItemIndex(item), 1);
  };

  @action
  addItem = description => {
    const todoItem = new TodoItemModel(description);
    this.todoItems.push(todoItem);
  };

  @action
  checkItem = item => {
    const index = this.findItemIndex(item);
    const newVal = !this.todoItems[index].checked;
    this.checkItemTwo(this.todoItems[index]);
  };

  @action
  checkItemTwo = item => {
    item.checked = !item.checked;
  };

  findItemIndex = item => {
    return this.todoItems.findIndex(({ uuid }) => uuid == item.uuid);
  };
}

export function initStore(isServer) {
  if (isServer) {
    return new Store(isServer);
  } else {
    if (store === null) {
      store = new Store(isServer);
    }
    return store;
  }
}
