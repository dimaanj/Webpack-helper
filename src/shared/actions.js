export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const addNotification = (content, type) => ({
  type: ADD_NOTIFICATION,
  payload: { content, type },
});

export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const removeNotification = (id) => ({
  type: REMOVE_NOTIFICATION,
  payload: { id },
});

export const LOGIN_REQUEST_IN_PROCESS = 'LOGIN_REQUEST_IN_PROCESS';
export const loginRequestInProcess = () => ({
  type: LOGIN_REQUEST_IN_PROCESS,
});

export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const loginRequestSuccess = ({ email, password }) => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload: { email, password },
});

export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE';
export const loginRequestFailure = () => ({
  type: LOGIN_REQUEST_FAILURE,
});
