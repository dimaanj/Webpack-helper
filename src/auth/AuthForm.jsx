import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../shared/FormInput';

const AuthForm = ({ title, onSubmit }) => {
  const { email, setEmail } = useState('');
  const { password, setPassword } = useState('');

  const onButtnonClick = (event) => {
    event.preventDefault();
    // validation
    onSubmit();
  };

  const onEmailChange = (email) => {
    setEmail(email);
  };

  const onPasswordChange = (passowrd) => {
    setPassword(passowrd);
  };

  return (
    <form>
      <FormInput value={email} title="Email" fieldFor="form-email" onChange={onEmailChange} />
      <FormInput value={password} title="Password" fieldFor="form-password" type="password" onChange={onPasswordChange} />
      <button type="submit" onClick={(e) => onButtnonClick(e)}>{title}</button>
    </form>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AuthForm;
