import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NotificationList } from '../shared/NotificationList';

const AuthForm = lazy(() => import('../auth/AuthForm'));
const Messenger = lazy(() => import('../messenger/Messenger'));

const Layout = () => {
  return (
    <>
      <NotificationList />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <AuthForm />
            </Route>

            <Route path="/messenger">
              <Messenger />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

export { Layout };
