import axios from 'axios';
import {
  addNotification,
  loginRequestFailure,
  loginRequestInProcess,
  loginRequestSuccess,
} from './actions';

const API = 'http://127.0.0.1/api';

const login = async ({ email, password }) => (dispatch) => {
  try {
    dispatch(loginRequestInProcess());
    axios({
      method: 'post',
      url: `${API}/auth`,
      data: {},
    });

    dispatch(loginRequestSuccess({ email, password }));
  } catch (e) {
    dispatch(loginRequestFailure());
    dispatch(addNotification({ content: `Login with email ${email} failed` }));
  }
};

export { login };
