import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  display: inline-block;
  border: ${({ isValid }) => (isValid ? '2px solid #ccc' : 'solid 2px #db4437')};
  border-radius: 6px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-size: 18px;
  font-weight: 400;

  :focus {
    outline: none;
    border: solid 2px #4285f4;
  }
`;

const Label = styled.section`
  font-size: 22px;
  font-weight: 400;
`;

const ErrorMessage = styled.div`
  height: 24px;
  padding: 0 0 8px 0;
  color: #db4437;
`;

const FormInput = React.forwardRef(
  ({ onChange, isValid, errorMessage, fieldFor, type, title, autoComplete, autofocus }, ref) => (
    <>
      <section>
        <Label fieldFor={fieldFor}>{title}</Label>
        <StyledInput
          onChange={onChange}
          ref={ref}
          id={fieldFor}
          type={type}
          autoFocus={autofocus}
          autoComplete={autoComplete}
          isValid={isValid}
        />
      </section>
      <section>
        <ErrorMessage>
          <span>{errorMessage}</span>
        </ErrorMessage>
      </section>
    </>
  )
);

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  fieldFor: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  autoComplete: PropTypes.string,
  autofocus: PropTypes.bool,
  errorMessage: PropTypes.string,
};
FormInput.defaultProps = {
  type: 'text',
  autofocus: false,
  autoComplete: undefined,
  errorMessage: undefined,
};

export { FormInput };
