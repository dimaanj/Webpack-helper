import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledErrorMessage = styled.section`
  min-height: 24px;
  color: #de5246;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ErrorText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 4px;
`;

const ErrorMessage = ({ message }) => {
  const errorElement = useRef();

  useEffect(() => {
    if (message) {
      errorElement.current.style.opacity = '1';
    } else {
      errorElement.current.style.opacity = '0';
    }
  }, [message]);

  return (
    <StyledErrorMessage ref={errorElement}>
      <ErrorText>{message}</ErrorText>
    </StyledErrorMessage>
  );
};
ErrorMessage.propTypes = {
  message: PropTypes.string,
};
ErrorMessage.defaultProps = {
  message: undefined,
};

export { ErrorMessage };
