import {
  createTodo,
  removeTodo,
  completeTodo,
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
} from './actions';

const API = 'http://d8760f966fd5.ngrok.io';

export const displayAlert = (text) => () => {
  alert(text);
};

export const loadTodos = () => async (dispatch) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch(`${API}/todos-delay`);
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch(`${API}/todos`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const completeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${API}/todos/${id}/completed`, {
      method: 'post',
    });
    const todo = await response.json();
    dispatch(completeTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${API}/todos/${id}`, {
      method: 'delete',
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};
