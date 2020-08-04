export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const addNotification = (content, type) => ({
  type: ADD_NOTIFICATION,
  payload: { content, type },
});
