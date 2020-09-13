import React, { lazy, Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { NotificationList } from '../shared/NotificationList';
import { checkAuth } from '../shared/thunks';

const AuthForm = lazy(() => import('../auth/AuthForm'));
const Messenger = lazy(() => import('../messenger/Messenger'));
const NotFound = lazy(() => import('../shared/NotFound'));

const EmailConfirm = ({
  checkAuth,
  match: {
    params: { token },
  },
}) => {
  // const isAuthenticated = false;
  // if (isAuthenticated) {
  //   return <Messenger />;
  // }
  // return <Redirect to="/" />;

  console.log('render email confirm');

  return <Messenger />;
};
EmailConfirm.propTypes = {
  checkAuth: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const LayoutStateless = ({ checkAuth }) => {
  console.log('render router layout');
  return (
    <>
      <NotificationList />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <AuthForm />;
              }}
            />
            <Route
              path="/confirm/:token"
              render={(props) => <EmailConfirm {...props} checkAuth={checkAuth} />}
            />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};
LayoutStateless.propTypes = {
  checkAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  checkAuth: (token) => dispatch(checkAuth(token)),
});

const Layout = connect(mapStateToProps, mapDispatchToProps)(LayoutStateless);

export { Layout };
