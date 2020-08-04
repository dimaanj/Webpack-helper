import React from 'react';
import { AuthForm } from '../auth/AuthForm';
import { Notification } from '../shared/Notification';

const Layout = () => {
  return (
    <div>
      <Notification />
      <AuthForm />
    </div>
  );
};

export { Layout };
