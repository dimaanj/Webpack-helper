import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTodos, removeTodoRequest, completeTodoRequest } from './thunks';
import { getTodosLoading, getCompletedTodos, getIncompletedTodos } from './selectors';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({
  isLoading,
  completedTodos,
  incompletedTodos,

  onRemovePressed,
  onTodoCompleted,
  startLoadingTodos,
}) => {
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompletedTodos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onTodoCompleted={onTodoCompleted}
        />
      ))}
      <h3>Completed:</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onTodoCompleted={onTodoCompleted}
        />
      ))}
    </div>
  );

  useEffect(() => {
    startLoadingTodos();
  }, []);

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompletedTodos: getIncompletedTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onTodoCompleted: (id) => dispatch(completeTodoRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
