import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "./actions";
import { displayAlert } from "./thunks";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { completeTodo } from "./actions";
import "./TodoList.css";

const TodoList = ({
  todoList = [],
  onRemovePressed,
  onTodoCompleted,
}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todoList.map((todo) => (
      <TodoListItem
        key={todo.text}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onTodoCompleted={onTodoCompleted}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todoList: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onTodoCompleted: (uniqueText) => dispatch(completeTodo(uniqueText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
