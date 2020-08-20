import {
  addNotification,
  loginRequestFailure,
  loginRequestInProcess,
  loginRequestSuccess,
} from './actions';

const API = '';

const login = async ({ email, password }) => (dispatch) => {
  try {
    dispatch(loginRequestInProcess());
    // const response = await fetch(`${API}/login`);

    dispatch(loginRequestSuccess({ email, password }));
  } catch (e) {
    dispatch(loginRequestFailure());
    dispatch(addNotification({ content: `Login with email ${email} failed` }));
  }
};

export { login };
