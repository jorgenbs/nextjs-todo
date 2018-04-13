import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import Clock from './Clock';
import { persist, create } from 'mobx-persist';

@inject('store')
@observer
class Page extends React.Component {
  componentDidMount() {
    this.props.store.start();
  }

  componentWillUnmount() {
    this.props.store.stop();
  }

  componentDidMount() {
    const hydrate = create({
      storage: localStorage,
      jsonify: true
    });
    hydrate('counter', this.props.store).then(() => {
      alert(this.props.store.counter);
      this.props.store.increaseCounter();
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Clock
          lastUpdate={this.props.store.lastUpdate}
          light={this.props.store.light}
        />
        <nav>
          <Link href={this.props.linkTo}>
            <a>Navigate {this.props.store.counter}</a>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Page;
