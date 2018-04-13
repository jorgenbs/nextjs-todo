import React from 'react';

const TodoItem = props => {
  return (
    <li>
      <div className="view">
        <button className="complete yes" />
        <label>asdf</label>
        <button className="destroy" />
      </div>
    </li>
  );
};

export default TodoItem;
