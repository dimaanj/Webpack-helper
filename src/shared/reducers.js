import { ADD_NOTIFICATION } from './actions';
import { reducersFactory } from './reducer-factory';

const initialState = { notifications: [] };

const handlers = {};

handlers[ADD_NOTIFICATION] = (state, action) => {
  const { content, type } = action.payload;
  const id = `notification__${Date.now()}`;
  return {
    ...state,
    notifications: [...state.notifications, { id, content, type }],
  };
};

const messenger = reducersFactory(initialState, handlers);

export { messenger };
