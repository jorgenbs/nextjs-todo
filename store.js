import { action, observable } from 'mobx';
import { persist, create } from 'mobx-persist';

let store = null;

class Store {
  @persist
  @observable
  counter = 0;

  @persist('list')
  @observable
  todoItems = [];

  constructor(isServer) {}

  @action
  increaseCounter = () => {
    this.counter = this.counter + 1;
  };

  @action
  removeItem = index => {
    this.todoItems.splice(index, 1);
  };

  @action
  addItem = item => {
    this.todoItems.push(item);
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
