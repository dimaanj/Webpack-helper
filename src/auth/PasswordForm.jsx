import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FormInput } from '../shared/FormInput';
import { CompleteButton } from '../shared/CompleteButton';
import { useValidation } from '../shared/useValidation';

const PasswordForm = ({ onComplete }) => {
  // const passwordRef = useRef(null);
  // const { isValid: isValidEmail, message: errorMessage } = useValidation({
  //   ref: passwordRef,
  //   validate: passwordRef,
  // });

  const onCompletePswd = (event) => {
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
      /> */}
      <CompleteButton title="Sign in" isDisabled={false} />
    </form>
  );
};

PasswordForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export { PasswordForm };
