import { configureStore } from "../store";

export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const COMPLETE_TODO = 'COMPLETE_TODO';
export const completeTodo = (uniqueText) => ({
    type: COMPLETE_TODO,
    payload: { uniqueText }
});

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_IN_SUCCESS = 'LOAD_TODOS_IN_SUCCESS';
export const loadTodosSuccess = (todos) => ({
    type: LOAD_TODOS_IN_SUCCESS,
    payload: {todos}
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE
});