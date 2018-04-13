import { action, observable } from 'mobx';
import { persist, create } from 'mobx-persist';

let store = null;

class Store {
  @observable lastUpdate = 0;
  @observable light = false;

  @persist
  @observable
  counter = 0;

  constructor(isServer, lastUpdate) {
    this.lastUpdate = lastUpdate;
  }

  @action
  start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now();
      this.light = true;
    }, 1000);
  };

  @action
  increaseCounter = () => {
    this.counter = this.counter + 1;
  };

  stop = () => clearInterval(this.timer);
}

export function initStore(isServer, lastUpdate = Date.now()) {
  if (isServer) {
    return new Store(isServer, lastUpdate);
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate);
    }
    return store;
  }
}
