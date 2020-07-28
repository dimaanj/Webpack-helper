import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormInput } from '../shared/FormInput';
import { SubmitButton } from '../shared/SubmitButton';

const Toggler = styled.div`
  padding: 0;
  display: flex;
  width: 100%;
  margin-top: 12px;
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
  const [email, setEmail] = useState('');
  const [authAction, setAuthAction] = useState('signin');

  const onButtnonClick = (event) => {
    event.preventDefault();
    // disable button
    // validation
    onComplete({ email });
  };

  const toggleSignInSignUp = () => {
    if (authAction === 'signin') {
      setAuthAction('signup');
    } else {
      setAuthAction('signin');
    }
  };

  return (
    <form>
      <FormInput
        value={email}
        title="Email"
        fieldFor="form-email"
        type="email"
        onChange={setEmail}
        autofocus
        name="email"
        autoComplete="email"
      />
      <Toggler onClick={toggleSignInSignUp}>
        <ToggledOption selected={authAction === 'signin'} authAction="signin" type="button">
          <span>Sign in</span>
        </ToggledOption>
        <ToggledOption selected={authAction === 'signup'} authAction="signup" type="button">
          <span>Sign up</span>
        </ToggledOption>
      </Toggler>
      <SubmitButton type="submit" onClick={(e) => onButtnonClick(e)}>
        Continue
      </SubmitButton>
    </form>
  );
};

EmailForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export { EmailForm };
