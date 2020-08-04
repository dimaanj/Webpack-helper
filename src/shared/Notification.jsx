import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { getNotifications } from './selectors';

const Wrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 3rem 1rem 1rem 1rem;
`;

const NotificationItem = styled.div`
  height: 200px;
  padding: 1rem;
  margin-bottom: 12px;
  background-color: #db4437;
  color: white;
  border-radius: 6px;
  opacity: 85%;
  text-size: 16px;

  word-wrap: break-word;

  display: flex;
`;

const CloseButton = styled.a`
  width: 24px;
  height: 24px;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  :hover {
    opacity: 1;
  }
  :before,
  :after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
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
  width: 24px;
`;

const NotificationStateless = ({ notifications }) => {
  const notificationList = map(notifications, ({ id, content, type }) => (
    <NotificationItem key={id}>
      <div>{content}</div>
      <CloseButtonWrapper>
        <CloseButton href="#" />
      </CloseButtonWrapper>
    </NotificationItem>
  ));

  return (
    <Wrapper>
      <Content>{notificationList}</Content>
    </Wrapper>
  );
};
NotificationStateless.propTypes = {
  notifications: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: getNotifications(state),
});
const mapDispatchToProps = (state) => ({
  onRemove: () => {},
});
const Notification = connect(mapStateToProps, mapDispatchToProps)(NotificationStateless);

export { Notification };
