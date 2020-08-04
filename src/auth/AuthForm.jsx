import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EmailForm } from './EmailForm';
import { PasswordForm } from './PasswordForm';
import { addNotification } from '../shared/actions';

const SnapContainer = styled.div`
  scroll-snap-type: x mandatory;
  display: flex;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow: hidden;
`;

const SnapPage = styled.section`
  height: 100vh;
  min-width: 100vw;
  scroll-snap-align: center;
  padding: 2rem 1rem 1rem 1rem;
`;

const Header = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 24px;
  padding-bottom: 10px;
  border-bottom: solid 2px #ccc;
`;

const AuthFormStateless = ({ notify }) => {
  const passwordStep = useRef(null);

  const onCompleteEmail = (email, isSignInAction) => {
    notify(
      `Your email is ${email} and you want tossssss sssssssssssss sssssss ssssssss ${
        isSignInAction ? 'sign in' : 'sign up'
      }`,
      'ERROR'
    );
    passwordStep.current.scrollIntoView({ behavior: 'smooth' });
  };

  const onCompletePassword = () => {};

  return (
    <SnapContainer>
      <SnapPage>
        <Header>Welcome</Header>
        <EmailForm onComplete={onCompleteEmail} />
      </SnapPage>
      <SnapPage ref={passwordStep}>
        <Header>Fill your credentials</Header>
        <PasswordForm onComplete={onCompletePassword} />
      </SnapPage>
      {/* <SnapPage ref={element}>
        <Header>Fill your credentials</Header>
        <PasswordForm onComplete={onCompletePassword} />
      </SnapPage> */}
    </SnapContainer>
  );
};

AuthFormStateless.propTypes = {
  notify: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  notify: (content, type) => {
    return dispatch(addNotification(content, type));
  },
});
const AuthForm = connect(null, mapDispatchToProps)(AuthFormStateless);

export { AuthForm };
