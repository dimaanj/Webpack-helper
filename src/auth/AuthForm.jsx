import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormInput from '../shared/FormInput';

const SubmitButton = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 18px;
  font-size: 22px;
  font-weight: 400;
  border-radius: 6px;
  background-color: #4285f4;
  border: 2px solid #4285f4;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  :focus {
    outline: none;
    background-color: #0f9d58;
    border: 2px solid #0f9d58;
  }
`;

const Toggler = styled.div`
  width: 100%;
  margin-top: 8px;
  border-radius: 6px;
  border: solid 2px #4285f4;
  display: flex;
`;

const ToggledOption = styled.button`
  display: flex;
  justify-content: center;
  width: 50%;
  font-size: 22px;
  padding: 4px;
  background: none;
  background-color: ${(props) => (props.selected ? '#4285f4' : 'none')};
  color: ${(props) => (props.selected ? 'white' : '')};
  cursor: pointer;
  border: none;

  :focus {
    outline: none;
  }
`;

const AuthForm = ({ title, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onButtnonClick = (event) => {
    event.preventDefault();
    // disable button
    // validation
    onSubmit({ email, password });
  };

  const onEmailChange = (email) => {
    setEmail(email);
  };

  // const onPasswordChange = (passowrd) => {
  //   setPassword(passowrd);
  // };

  return (
    <form>
      <FormInput
        value={email}
        title="Email"
        fieldFor="form-email"
        type="email"
        onChange={onEmailChange}
        autofocus
        name="email"
        autoComplete="email"
      />
      <Toggler>
        <ToggledOption selected type="button">Sign in</ToggledOption>
        <ToggledOption type="button">Sign up</ToggledOption>
      </Toggler>
      {/* <FormInput
        value={password}
        title="Password"
        fieldFor="form-password"
        type="password"
        onChange={onPasswordChange}
        name="current-password"
      /> */}
      {/* <button type="button">Create an account</button> */}
      <SubmitButton type="submit" onClick={(e) => onButtnonClick(e)}>
        {title}
      </SubmitButton>
    </form>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AuthForm;
