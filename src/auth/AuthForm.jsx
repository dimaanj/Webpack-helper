import React, { useState } from 'react';
import styled from 'styled-components';
import { EmailForm } from './EmailForm';
import { PasswordForm } from './PasswordForm';
import { withAnimation } from '../shared/withAnimation';

const Layout = styled.div`
  padding: 15px;
`;

const Header = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 28px;
  padding-bottom: 12px;
  border-bottom: solid 2px #ccc;
`;

const AnimatedEmailForm = withAnimation(EmailForm);
const AnimatedPasswordForm = withAnimation(PasswordForm);

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailForm, setIsEmailForm] = useState(true);

  const onCompleteEmail = ({ email }) => {
    // change component
    setEmail(email);
  };

  const onCompletePassword = ({ password }) => {
    setPassword(password);
  };

  const changeForm = () => {
    setIsEmailForm(false);
  };

  return (
    <Layout>
      <Header>Welcome</Header>
      {isEmailForm ? (
        <AnimatedEmailForm
          isMounted={email === ''}
          title="Continue"
          onComplete={onCompleteEmail}
          onUnmount={changeForm}
        />
      ) : (
        <AnimatedPasswordForm
          isMounted={password === ''}
          onComplete={onCompletePassword}
          onUnmount={changeForm}
        />
      )}
    </Layout>
  );
};

export { AuthForm };
