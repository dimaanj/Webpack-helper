import React from 'react';
import PropTypes from 'prop-types';
import ReactCodeInput from 'react-verification-code-input';
import { Header } from '../shared/Header';
import './ConfirmEmail.css';

const ConfirmEmailForm = ({ onComplete }) => (
  <>
    <Header>Please, provide the code we sent</Header>
    <div className="verify-wrapper">
      <ReactCodeInput onComplete={onComplete} autoFocus={false} />
    </div>
  </>
);
ConfirmEmailForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export { ConfirmEmailForm };
