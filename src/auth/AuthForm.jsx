import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PasswordForm } from './PasswordForm';
import { EmailForm } from './EmailForm';
import { sendConfirmEmail } from '../shared/thunks';
import { AnimatedContent } from '../shared/AnimatedContent';
import { ConfirmEmail } from './ConfirmEmail';

const VIEWS = {
  EMAIL: 'email',
  PASSWORD: 'password',
  CONFIRM_EMAIL: 'confirmEmail',
};

const AuthFormStateless = ({ signIn, sendConfirmEmail }) => {
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
    isSignIn: true,
    nextView: VIEWS.EMAIL,
  });

  const onCompletePassword = (password) => {
    if (authData.isSignIn) {
      signIn({ email: authData.email, password });
      // change route
    } else {
      sendConfirmEmail({ email: authData.email, password });
      setAuthData({
        ...authData,
        password,
        nextView: VIEWS.CONFIRM_EMAIL,
      });
    }
  };

  const onCompleteEmail = ({ email, isSignIn }) => {
    setAuthData({
      ...authData,
      email,
      isSignIn,
      nextView: VIEWS.PASSWORD,
    });
  };

  console.log('render auth form');

  return (
    <AnimatedContent>
      <div>
        {authData.nextView === VIEWS.EMAIL && <EmailForm onComplete={onCompleteEmail} />}
        {authData.nextView === VIEWS.PASSWORD && (
          <PasswordForm
            onComplete={onCompletePassword}
            header={authData.isSignIn ? 'Please, provide the password' : 'Create the password'}
            title={authData.isSignIn ? 'Sign in' : 'Sign up'}
          />
        )}
        {authData.nextView === VIEWS.CONFIRM_EMAIL && <ConfirmEmail />}
      </div>
    </AnimatedContent>
  );
};

AuthFormStateless.propTypes = {
  signIn: PropTypes.func.isRequired,
  sendConfirmEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  signIn: ({ email, password }) => {
    // return dispatch(signIn({ email, password }));
  },
  sendConfirmEmail: ({ email, password }) => {
    return dispatch(sendConfirmEmail({ email, password }));
  },
});
const AuthForm = connect(null, mapDispatchToProps)(AuthFormStateless);

export { AuthForm as default };
