// @flow

import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import LoginPage from '../LoginPage';
import VerificationPage from '../VerificationPage';
import ForgotPasswordPage from '../ForgotPasswordPage';
import WorkspacePage from '../WorkspacePage';

type Props = {
  component: any,
};

type RouteProps = {
  location: Object,
};

export default function Routes() {
  const { user } = useContext(UserContext);

  const PrivateRoute = ({ component: Component, ...rest }: Props) => (
    <Route
      {...rest}
      render={(props: RouteProps) =>
        user.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <main>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/verification" component={VerificationPage} />
        <Route exact path="/forgotpassword" component={ForgotPasswordPage} />
        <PrivateRoute exact path="/workspaces" component={WorkspacePage} />
      </Switch>
    </main>
  );
}
