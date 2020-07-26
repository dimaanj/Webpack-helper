import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormLabel from './FormLabel';

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
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

const FormInput = ({
  value,
  fieldFor,
  type,
  title,
  onChange,
  autoComplete,
  autofocus,
  option,
}) => (
  <section>
    <FormLabel fieldFor={fieldFor} title={title} option={option} />
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
  option: PropTypes.string,
};
FormInput.defaultProps = {
  type: 'text',
  value: '',
  autofocus: false,
  autoComplete: undefined,
  option: undefined,
};

export default FormInput;
