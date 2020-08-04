import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormInput } from '../shared/FormInput';
import { CompleteButton } from '../shared/CompleteButton';

const AUTH_ACTIONS = {
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',
};

const Toggler = styled.div`
  padding: 0;
  display: flex;
  width: 100%;
  margin-bottom: 24px;
`;

const ToggledOption = styled.button`
  display: flex;
  justify-content: center;
  width: 50%;
  font-size: 22px;
  padding: 8px;
  background-color: ${(props) => (props.selected ? '#4285f4' : '#efefef')};
  color: ${(props) => (props.selected ? 'white' : '')};
  border-radius: ${(props) => (props.authAction === 'signIn' ? '6px 0 0 6px' : '0 6px 6px 0')};
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

const EmailForm = ({ onComplete }) => {
  const [authAction, setAuthAction] = useState(AUTH_ACTIONS.SIGN_IN);
  const [email, setEmail] = useState('');
  const isSignInAction = authAction === AUTH_ACTIONS.SIGN_IN;

  const onSubmit = (event) => {
    event.preventDefault();
    onComplete(email, isSignInAction);
  };

  const toggleSignInSignUp = () => {
    if (authAction === AUTH_ACTIONS.SIGN_IN) {
      setAuthAction(AUTH_ACTIONS.SIGN_UP);
    } else {
      setAuthAction(AUTH_ACTIONS.SIGN_IN);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <FormInput
        title="Email"
        id="form-email"
        autoFocus
        type="email"
        name="email"
        value={email}
        onChange={setEmail}
        autoComplete="email"
        maxLength="64"
        required
      />
      <Toggler onClick={toggleSignInSignUp}>
        <ToggledOption selected={isSignInAction} authAction={AUTH_ACTIONS.SIGN_IN} type="button">
          <span>Sign in</span>
        </ToggledOption>
        <ToggledOption selected={!isSignInAction} authAction={AUTH_ACTIONS.SIGN_UP} type="button">
          <span>Sign up</span>
        </ToggledOption>
      </Toggler>
      <CompleteButton title="Continue" />
    </form>
  );
};

EmailForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export { EmailForm };
