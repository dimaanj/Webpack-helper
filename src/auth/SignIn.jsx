import React from 'react';
import styled from 'styled-components';
import AuthForm from './AuthForm';

const Layout = styled.div`
  padding: 15px;
`;

const Header = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 54px;
  padding-bottom: 12px;
  border-bottom: solid 2px #ccc;
`;

const SignIn = () => {
  const onSubmit = ({ email, password }) => {};

  return (
    <Layout>
      <Header>Welcome</Header>
      <AuthForm title="Continue" onSubmit={onSubmit} />
    </Layout>
  );
};

export default SignIn;
