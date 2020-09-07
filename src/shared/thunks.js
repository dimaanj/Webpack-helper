import axios from 'axios';
import {
  addNotification,
  loginRequestFailure,
  loginRequestInProcess,
  loginRequestSuccess,
  confirmEmailRequestInProcess,
  confirmEmailRequestSuccess,
  confirmEmailRequestFailure,
} from './actions';

const API = process.env.SERVICE_URL;

const sendConfirmationEmail = ({ email, password }) => (dispatch) => {
  axios
    .post(`${API}/auth/sendConfirmationEmail`, {
      email,
      password,
    })
    .then(() => dispatch(confirmEmailRequestSuccess()))
    .catch((error) => {
      dispatch(confirmEmailRequestFailure());
      dispatch(
        addNotification({
          content: `Failed to send confirmation email to ${email}. ${error}`,
          type: 'ERROR',
        })
      );
    });
  dispatch(confirmEmailRequestInProcess());
};

const signIn = ({ email, password }) => (dispatch) => {
  try {
    dispatch(loginRequestInProcess());
    // axios({
    //   method: 'post',
    //   url: `${API}/auth`,
    //   data: {},
    // });

    dispatch(loginRequestSuccess({ email, password }));
  } catch (e) {
    dispatch(loginRequestFailure());
    dispatch(addNotification({ content: `Login with email ${email} failed` }));
  }
};

export { sendConfirmationEmail, signIn };
