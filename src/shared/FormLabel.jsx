import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Label = styled.section`
  font-size: 22px;
  font-weight: 400;
`;

const OptionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #ccc;
  font-size: 18px;
  padding: 5px 0 0 5px;
  transition: color 0.3s ease;

  :focus {
    outline: none;
    color: #4285f4;
  }
`;

const FormLabel = ({ fieldFor, title, option }) => (
  <LabelContainer>
    <Label htmlFor={fieldFor}>{title}</Label>
    <OptionButton type="button">{option}</OptionButton>
  </LabelContainer>
);

FormLabel.propTypes = {
  fieldFor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  option: PropTypes.string,
};

FormLabel.defaultProps = {
  option: undefined,
};

export default FormLabel;
