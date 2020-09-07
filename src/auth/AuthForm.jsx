import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PasswordForm } from './PasswordForm';
import { EmailForm } from './EmailForm';
import { signIn, sendConfirmationEmail } from '../shared/thunks';
import { AnimatedContent } from '../shared/AnimatedContent';
import { ConfirmEmail } from './ConfirmEmail';

const AuthFormStateless = ({ signIn, sendConfirmationEmail }) => {
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
    isSignIn: true,
    nextView: 'email',
  });

  const onCompletePassword = (password) => {
    if (authData.isSignIn) {
      signIn({ email: authData.email, password });
      // change route
    } else {
      sendConfirmationEmail({ email: authData.email, password });
      setAuthData({
        ...authData,
        password,
        nextView: 'confirmEmail',
      });
    }
  };

  const onCompleteEmail = ({ email, isSignIn }) => {
    setAuthData({
      ...authData,
      email,
      isSignIn,
      nextView: 'password',
    });
  };

  console.log('render auth form');

  return (
    <AnimatedContent>
      <div>
        {authData.nextView === 'email' && <EmailForm onComplete={onCompleteEmail} />}
        {authData.nextView === 'password' && (
          <PasswordForm
            onComplete={onCompletePassword}
            header={authData.isSignIn ? 'Please, provide the password' : 'Create the password'}
            title={authData.isSignIn ? 'Sign in' : 'Sign up'}
          />
        )}
        {authData.nextView === 'confirmEmail' && <ConfirmEmail />}
      </div>
    </AnimatedContent>
  );
};

AuthFormStateless.propTypes = {
  signIn: PropTypes.func.isRequired,
  sendConfirmationEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  signIn: ({ email, password }) => {
    return dispatch(signIn({ email, password }));
  },
  sendConfirmationEmail: ({ email, password }) => {
    return dispatch(sendConfirmationEmail({ email, password }));
  },
});
const AuthForm = connect(null, mapDispatchToProps)(AuthFormStateless);

export { AuthForm as default };
