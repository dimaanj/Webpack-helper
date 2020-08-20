import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 8px;
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
  }
`;

const CompleteButton = React.forwardRef(({ title }, ref) => {
  return (
    <StyledButton ref={ref} type="submit">
      {title}
    </StyledButton>
  );
});

CompleteButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export { CompleteButton };
