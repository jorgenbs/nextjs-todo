import React from 'react';
import { inject, observer } from 'mobx-react';
import { persist, create } from 'mobx-persist';

@inject('store')
@observer
class Page extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidMount() {
    const hydrate = create({
      storage: localStorage,
      jsonify: true
    });
    hydrate('counter', this.props.store).then(() => {
      this.props.store.increaseCounter();
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.store.counter}</h1>
      </div>
    );
  }
}

export default Page;
