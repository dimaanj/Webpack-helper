import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodoRequest } from './thunks';
import { getTodos } from './selectors';
import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="new-todo-form">
      <input
        placeholder="Type new todo here"
        className="new-todo-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="button"
        className="new-todo-button"
        onClick={() => {
          const isDuplicateText = todos.some((todo) => todo.text === inputValue);

          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue('');
          }
        }}
      >
        Create todo
      </button>
    </div>
  );
};

NewTodoForm.propTypes = {
  todos: PropTypes.array.isRequired,
  onCreatePressed: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
