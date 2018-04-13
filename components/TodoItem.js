import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }
  checkItem() {
    this.props.checkItem(this.props.item);
    this.setState(prevState => ({ checked: !prevState.checked }));
  }
  render() {
    const { item, removeItem, checkItem, checked } = this.props;
    return (
      <li>
        <div className="view">
          <button
            className={`complete ${this.state.checked ? 'yes' : 'no'}`}
            onClick={() => this.checkItem()}
          />
          <label>{item.description}</label>
          <button className="destroy" onClick={() => removeItem(item)} />
        </div>
      </li>
    );
  }
}
export default TodoItem;
