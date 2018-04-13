import { action, observable } from 'mobx';
import { persist, create } from 'mobx-persist';

let store = null;

class Store {
  @persist
  @observable
  counter = 0;

  constructor(isServer) {}

  @action
  increaseCounter = () => {
    this.counter = this.counter + 1;
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
