import React from 'react';

const TodoItem = ({ item, removeItem, checkItem }) => {
  return (
    <li>
      <div className="view">
        <button
          className={`complete ${item.checked ? 'yes' : 'no'}`}
          onClick={() => checkItem(item)}
        />
        <label>{item.description}</label>
        <button className="destroy" onClick={() => removeItem(item)} />
      </div>
    </li>
  );
};

export default TodoItem;
