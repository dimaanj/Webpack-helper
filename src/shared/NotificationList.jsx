import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { getNotifications } from './selectors';
import { removeNotification } from './actions';
import { NotificationItem } from './NotificationItem';

const Wrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 3rem 1rem 1rem 1rem;
`;

const NotificationListStateless = ({ notifications, onRemove }) => {
  const notificationList = map(notifications, ({ id, ...others }) => (
    <NotificationItem key={id} onRemove={() => onRemove(id)} {...others} />
  ));

  return (
    <Wrapper>
      <Content>{notificationList}</Content>
    </Wrapper>
  );
};
NotificationListStateless.propTypes = {
  notifications: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: getNotifications(state),
});
const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(removeNotification(id)),
});
const NotificationList = connect(mapStateToProps, mapDispatchToProps)(NotificationListStateless);

export { NotificationList };
