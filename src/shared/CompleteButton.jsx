import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 8px;
  font-size: 22px;
  font-weight: 400;
  border-radius: 6px;
  background-color: ${({ isDisabled }) => (isDisabled ? '#efefef' : '#4285f4')};
  border: ${({ isDisabled }) => (isDisabled ? '2px solid #efefef' : '2px solid #4285f4')};
  color: ${({ isDisabled }) => (isDisabled ? 'black' : 'white')};
  cursor: pointer;
  transition: all 0.3s ease;

  :focus {
    outline: none;
  }
`;

const CompleteButton = ({ title }) => {
  return (
    <StyledButton isDisabled={false} type="submit">
      {title}
    </StyledButton>
  );
};
CompleteButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export { CompleteButton };
