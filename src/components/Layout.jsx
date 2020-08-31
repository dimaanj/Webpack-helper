import React from 'react';
import { AuthForm } from '../auth/AuthForm';
import { NotificationList } from '../shared/NotificationList';

const Layout = () => {
  return (
    <>
      <NotificationList />
      <AuthForm />
    </>
  );
};

export { Layout };
