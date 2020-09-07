import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FormInput } from '../shared/FormInput';
import { CompleteButton } from '../shared/CompleteButton';
import { useValidation } from '../shared/useValidation';
import { validatePassword } from '../validation/validation';
import { ErrorMessage } from '../shared/ErrorMessage';
import { Header } from '../shared/Header';

const PasswordForm = ({ onComplete, title, header }) => {
  const submitButton = useRef();
  const { register, handleSubmit, errorMsg } = useValidation();
  const passwordElement = useCallback((node) => register(node, validatePassword), []);

  const onSubmit = (event) =>
    handleSubmit(event, submitButton, (values) => {
      onComplete(values.password);
    });

  return (
    <>
      <Header>{header}</Header>
      <form onSubmit={onSubmit}>
        <FormInput
          ref={passwordElement}
          title="Password"
          id="form-password"
          type="password"
          name="password"
        />
        <ErrorMessage message={errorMsg} />
        <CompleteButton ref={submitButton} title={title} />
      </form>
    </>
  );
};

PasswordForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export { PasswordForm };
