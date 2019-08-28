import React, { useContext, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import LoginPage from '../../pages/LoginPage';
import VerificationPage from '../../pages/VerificationPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';
import WorkspacePage from '../../pages/WorkspacePage';
import TemplatePage from '../../pages/TemplatePage';
import { setAuthToken } from '../../services/customAxios';

type Props = {
  component: any,
  path: any,
};

type RouteProps = {
  location: Object,
};

export default function Routes() {
  const { user, userService } = useContext(UserContext);

  useEffect(() => {
    if (!user.isAuthenticated) {
      const { token } = localStorage;
      if (token) {
        setAuthToken(token);
        userService.get();
      }
    }
  }, [user.isAuthenticated, userService]);

  const PrivateRoute = ({ component: Component, path, ...rest }: Props) => (
    <Route
      path={path}
      render={(props: RouteProps) =>
        user.isAuthenticated ? (
          <Component {...props} {...rest} />
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
        <Route path="/redirect" component={LoginPage} />
        <Route exact path="/verification" component={VerificationPage} />
        <Route exact path="/forgotpassword" component={ForgotPasswordPage} />
        <PrivateRoute
          path="/workspaces"
          user={user.user}
          component={WorkspacePage}
        />
        <PrivateRoute
          path="/templates/:id/:link"
          user={user.user}
          component={TemplatePage}
        />
      </Switch>
    </main>
  );
}
