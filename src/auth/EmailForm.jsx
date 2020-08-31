import React, { useState, useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormInput } from '../shared/FormInput';
import { CompleteButton } from '../shared/CompleteButton';
import { useValidation } from '../shared/useValidation';
import { validateEmail } from '../validation/validation';
import { ErrorMessage } from '../shared/ErrorMessage';
import { Header } from '../shared/Header';
import './EmailForm.css';

const Toggler = styled.section`
  padding: 0;
  display: flex;
  width: 100%;
  margin-bottom: 24px;
`;

const EmailForm = ({ onComplete }) => {
  const submitButton = useRef();
  const signInElement = useRef();
  const signUpElement = useRef();
  const [isSignIn, setIsSignIn] = useState(true);
  const { register, handleSubmit, errorMsg } = useValidation();

  const emailElement = useCallback((node) => register(node, validateEmail), []);

  const onSubmit = (event) =>
    handleSubmit(event, submitButton, ({ email }) => {
      onComplete({ email, isSignIn });
    });

  const toggleAuthAction = () => {
    signInElement.current.classList.toggle('selected');
    signUpElement.current.classList.toggle('selected');
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <Header>Welcome</Header>
      <form onSubmit={onSubmit}>
        <FormInput
          ref={emailElement}
          title="Email"
          id="form-email"
          autoFocus
          name="email"
          autoComplete="email"
        />
        <ErrorMessage message={errorMsg} />
        <Toggler onClick={toggleAuthAction}>
          <button ref={signInElement} className="toggle toggle__left selected" type="button">
            <span>Sign in</span>
          </button>
          <button ref={signUpElement} className="toggle toggle__right" type="button">
            <span>Sign up</span>
          </button>
        </Toggler>
        <CompleteButton ref={submitButton} title="Continue" />
      </form>
    </>
  );
};

EmailForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export { EmailForm };
