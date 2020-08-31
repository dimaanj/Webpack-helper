import React, { useMemo, createContext, useContext, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';

const API = 'ws://127.0.0.1:8080';
const wsContext = {
  socket: {},
};
const WSContext = createContext(wsContext);
const useWSConnection = () => useContext(WSContext);

const WSContextProvider = ({ children }) => {
  const value = useMemo(
    () => ({
      socket: socketIOClient(API),
    }),
    []
  );

  useEffect(
    () => () => {
      const { socket } = value;
      socket.disconnect();
    },
    []
  );

  console.log('ws context initialized');

  return <WSContext.Provider value={value}>{children}</WSContext.Provider>;
};
WSContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { WSContextProvider, useWSConnection };
