import React from 'react';
import { inject, observer } from 'mobx-react';
import { persist, create } from 'mobx-persist';

@inject('store')
@observer
class Page extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>TODO-List</h1>
      </div>
    );
  }
}

export default Page;
