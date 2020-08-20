import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PasswordForm } from './PasswordForm';
import { ConfirmEmailForm } from './ConfirmEmailForm';
import { EmailForm } from './EmailForm';
import { login } from '../shared/thunks';
import { AnimatedContent } from '../shared/AnimatedContent';

const AuthFormStateless = ({ onLogin, notify }) => {
  const [content, setContent] = useState(undefined);

  const onCompletePassword = (password) => {};

  const onCompleteCode = (code) => {};

  const onCompleteEmail = ({ email, isSignIn }) => {
    setContent(
      isSignIn ? (
        <PasswordForm onComplete={onCompletePassword} title="Login" />
      ) : (
        <ConfirmEmailForm onComplete={onCompleteCode} />
      )
    );
  };

  return <AnimatedContent>{content || <EmailForm onComplete={onCompleteEmail} />}</AnimatedContent>;
};

AuthFormStateless.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onLogin: ({ email, password }) => {
    return dispatch(login({ email, password }));
  },
});
const AuthForm = connect(null, mapDispatchToProps)(AuthFormStateless);

export { AuthForm };
