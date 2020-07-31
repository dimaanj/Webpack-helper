import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormInput } from '../shared/FormInput';
import { CompleteButton } from '../shared/CompleteButton';
import { validateEmail } from '../validation/validation';

const AUTH_ACTIONS = {
  SIGNIN: 'signin',
  SIGNUP: 'signup',
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
  border-radius: ${(props) => (props.authAction === 'signin' ? '6px 0 0 6px' : '0 6px 6px 0')};
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

const EmailForm = ({ onComplete }) => {
  const [authAction, setAuthAction] = useState(AUTH_ACTIONS.SIGNIN);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const isSignInAction = authAction === AUTH_ACTIONS.SIGNIN;

  const onChangeEmail = (event) => {
    setErrorMessage(undefined);

    const { value } = event.target;
    setEmail(value);

    const { isValid } = validateEmail(value);
    setIsValidEmail(isValid);
  };

  const onCompleteEmail = (event) => {
    event.preventDefault();

    const { isValid, message } = validateEmail(email);
    setIsValidEmail(isValid);
    if (isValid) {
      onComplete(email);
    } else {
      setErrorMessage(message);
    }
  };

  const toggleSignInSignUp = () => {
    if (authAction === AUTH_ACTIONS.SIGNIN) {
      setAuthAction(AUTH_ACTIONS.SIGNUP);
    } else {
      setAuthAction(AUTH_ACTIONS.SIGNIN);
    }
  };

  return (
    <form onSubmit={(e) => onCompleteEmail(e)}>
      <FormInput
        onChange={onChangeEmail}
        title="Email"
        fieldFor="form-email"
        type="email"
        autofocus
        name="email"
        autoComplete="email"
        isValid={isValidEmail}
        errorMessage={errorMessage}
      />

      {/* {errorMessage && <span>{errorMessage}</span>} */}
      <Toggler onClick={toggleSignInSignUp}>
        <ToggledOption selected={isSignInAction} authAction={AUTH_ACTIONS.SIGNIN} type="button">
          <span>Sign in</span>
        </ToggledOption>
        <ToggledOption selected={!isSignInAction} authAction={AUTH_ACTIONS.SIGNUP} type="button">
          <span>Sign up</span>
        </ToggledOption>
      </Toggler>
      <CompleteButton title="Continue" isDisabled={!isValidEmail} />
    </form>
  );
};

EmailForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export { EmailForm };
