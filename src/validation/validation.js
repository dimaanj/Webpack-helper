/* eslint-disable no-useless-escape */
const MAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_FORMAT = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');

const validateIsEmpty = (value) => {
  if (!value || value === '') {
    return { isValid: false, message: 'Input is empty!' };
  }
};

const validateEmail = (value) => {
  validateIsEmpty();
  if (value.match(MAIL_FORMAT)) {
    return { isValid: true };
  }

  return { isValid: false, message: 'Email is not correct!' };
};

const validatePassword = (value) => {
  validateIsEmpty(value);
  if (value.match(PASSWORD_FORMAT)) {
    return { isValid: true };
  }
  return { isValid: false, message: 'Password is not correct!' };
};

export { validateEmail, validatePassword };
