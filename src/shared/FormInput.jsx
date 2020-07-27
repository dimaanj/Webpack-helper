import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  display: inline-block;
  border: 2px solid #ccc;
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

const FormInput = ({ value, fieldFor, type, title, onChange, autoComplete, autofocus }) => (
  <section>
    <Label fieldFor={fieldFor}>{title}</Label>
    <StyledInput
      value={value}
      id={fieldFor}
      type={type}
      autoFocus={autofocus}
      autoComplete={autoComplete}
      onChange={(e) => onChange(e.target.value)}
    />
  </section>
);

FormInput.propTypes = {
  value: PropTypes.string,
  fieldFor: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  autofocus: PropTypes.bool,
};
FormInput.defaultProps = {
  type: 'text',
  value: '',
  autofocus: false,
  autoComplete: undefined,
};

export { FormInput };
