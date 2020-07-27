import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormInput } from '../shared/FormInput';
import { SubmitButton } from '../shared/SubmitButton';

const PasswordForm = ({ onComplete }) => {
  const [password, setPassword] = useState('');

  const onButtnonClick = () => {
    onComplete({ password });
  };

  return (
    <form action="">
      <FormInput
        value={password}
        title="Password"
        fieldFor="form-password"
        type="password"
        onChange={setPassword}
        name="current-password"
      />
      <SubmitButton type="submit" onClick={(e) => onButtnonClick(e)}>
        Sign in
      </SubmitButton>
    </form>
  );
};

PasswordForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export { PasswordForm };
