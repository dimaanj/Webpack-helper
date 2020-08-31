import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NOTIFICATION_TYPES = {
  error: 'ERROR',
  warning: 'WARNING',
};

const StyledNotificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 12px;
  background-color: ${({ type }) => (type === NOTIFICATION_TYPES.error ? '#db4437' : '#0F9D58')};
  color: white;
  border-radius: 6px;
  opacity: 85%;
  text-size: 16px;
  word-wrap: break-word;
`;

const CloseButton = styled.a`
  position: absolute;
  right: 0px;
  top: 0;
  width: 36px;
  height: 36px;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  :hover {
    opacity: 1;
  }
  :before,
  :after {
    position: absolute;
    left: 16px;
    top: 4px;
    content: ' ';
    height: 28px;
    width: 4px;
    background-color: white;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;

const CloseButtonWrapper = styled.div`
  position: relative;
  width: 25%;
  height: 36px;
`;

const NotificationItem = ({ content, type, onRemove }) => {
  return (
    <StyledNotificationItem type={type}>
      <div>{content}</div>
      <CloseButtonWrapper>
        <CloseButton href="#" onClick={() => onRemove()} />
      </CloseButtonWrapper>
    </StyledNotificationItem>
  );
};
NotificationItem.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export { NotificationItem, NOTIFICATION_TYPES };
