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

const sendConfirmEmail = ({ email, password }) => (dispatch) => {
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

const checkAuth = ({ token }) => {
  // axios
  //   .post(`${API}/auth/check`, {
  //     token,
  //   })
  //   .then(() => dispatch());
};

export { sendConfirmEmail, checkAuth };
