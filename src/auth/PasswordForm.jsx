import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FormInput } from '../shared/FormInput';
import { CompleteButton } from '../shared/CompleteButton';
import { useValidation } from '../shared/useValidation';

const PasswordForm = ({ onComplete }) => {
  const onChangePassword = () => {};

  const onCompletePassword = (event) => {
    event.preventDefault();

    // onComplete({ password });
  };

  return (
    <form action="">
      {/* <FormInput
        title="Password"
        fieldFor="form-password"
        type="password"
        name="current-password"
        onChange={onChangePassword}
        isValid={isValidPassword}
        errorMessage={errorMessage}
      /> */}
      <CompleteButton title="Sign in" isDisabled={false} />
    </form>
  );
};

PasswordForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export { PasswordForm };
