import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { NotificationList } from '../shared/NotificationList';
import { checkAuth } from '../shared/thunks';

const AuthForm = lazy(() => import('../auth/AuthForm'));
const Messenger = lazy(() => import('../messenger/Messenger'));
const NotFound = lazy(() => import('../shared/NotFound'));

const LayoutStateless = ({ checkAuth }) => {
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
              path="/:token"
              render={(props) => {
                // const { token } = props;

                // const isAuthenticated = false;
                // if (isAuthenticated) {
                //   return <Messenger />;
                // }
                // return <Redirect to="/" />;

                return <Messenger />;
              }}
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
