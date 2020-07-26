import React from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onTodoCompleted }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      {!todo.isCompleted && (
      <button type="button" className="complete-btn" onClick={() => onTodoCompleted(todo.id)}>
        Mark as Completedddd
      </button>
      )}
      <button type="button" className="remove-btn" onClick={() => onRemovePressed(todo.id)}>
        Removeeeexs
      </button>
    </div>
  </div>
);

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemovePressed: PropTypes.func.isRequired,
  onTodoCompleted: PropTypes.func.isRequired,
};

export default TodoListItem;
