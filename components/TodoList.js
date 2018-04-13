import React from 'react';
import { inject, observer } from 'mobx-react';
import { create } from 'mobx-persist';

import TodoItem from './TodoItem';

@inject('store')
@observer
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }
  componentDidMount() {
    const hydrate = create({
      storage: localStorage,
      jsonify: true
    });
    hydrate('counter', this.props.store).then(() => {
      console.log('hydrated');
    });
  }
  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.store.addItem(this.state.input);
    }
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    return (
      <section id="todoapp">
        <header id="header">
          <h1>Todo</h1>
          <input
            id="new-todo"
            placeholder="What needs to be done?"
            onChange={this.handleChange.bind(this)}
            value={this.state.input}
            autoFocus=""
            onKeyPress={e => {
              this._handleKeyPress(e);
            }}
          />
        </header>
        <section id="main">
          <ul id="todo-list">
            {this.props.store.todoItems.map((item, index) => (
              <TodoItem
                key={Math.random()}
                item={item}
                removeItem={this.props.store.removeItem}
                checkItem={this.props.store.checkItem}
              />
            ))}
          </ul>
        </section>
      </section>
    );
  }
}

export default TodoList;
