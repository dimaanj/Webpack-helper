import { filter } from 'lodash';
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION, CONFIRM_EMAIL_REQUEST_IN_PROCESS } from './actions';
import { reducersFactory } from './reducer-factory';

const initialState = {
  notifications: [],
  isLoading: false,
  userData: {
    email: '',
  },
};

const handlers = {};

handlers[ADD_NOTIFICATION] = (state, action) => {
  const { content, type } = action.payload;
  const id = `notification__${Date.now()}`;
  return {
    ...state,
    notifications: [...state.notifications, { id, content, type }],
  };
};
handlers[REMOVE_NOTIFICATION] = (state, action) => {
  const { id } = action.payload;
  const notifications = state.notifications.slice();
  const filteredNotifications = filter(notifications, (item) => item.id !== id);
  return {
    ...state,
    notifications: filteredNotifications,
  };
};
handlers[CONFIRM_EMAIL_REQUEST_IN_PROCESS] = (state) => {
  return {
    ...state,
    isLoading: true,
  };
};

const messenger = reducersFactory(initialState, handlers);

export { messenger };
