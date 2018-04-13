import React from 'react';

const TodoItem = ({ item, removeItem }) => {
  return (
    <li>
      <div className="view">
        <button className="complete yes" />
        <label>{item}</label>
        <button className="destroy" onClick={() => removeItem()} />
      </div>
    </li>
  );
};

export default TodoItem;
