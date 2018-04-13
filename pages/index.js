import React from 'react';
import { Provider } from 'mobx-react';
import Head from 'next/head';

import { initStore } from '../store';
import Page from '../components/Page';

export default class Counter extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    const store = initStore(isServer);
    return { isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer);
  }

  render() {
    return (
      <Provider store={this.store}>
        <div>
          <Head>
            <title>Todos</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <link rel="stylesheet" href="/static/styles.css" />
          </Head>
          {/* <Page title="Index Page" /> */}
          <section id="todoapp">
            <header id="header">
              <h1>Todo</h1>
              <input
                id="new-todo"
                placeholder="What needs to be done?"
                autofocus=""
              />
            </header>
            <section id="main">
              <ul id="todo-list">
                <li>
                  <div class="view">
                    <button class="complete yes" />
                    <label>asdf</label>
                    <button class="destroy" />
                  </div>
                </li>
              </ul>
            </section>
          </section>
        </div>
      </Provider>
    );
  }
}
