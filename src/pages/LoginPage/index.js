// @flow
import React, { useState, useContext, useEffect } from 'react';

import type { Node } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { setAuthToken } from '../../services/customAxios';
import { UserContext } from '../../contexts/UserContext';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';
import SocialLogin from '../../components/SocialLogin';
import { Types } from '../../reducers/actionTypes';
import './styles.scss';

type InputFields = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  agree: boolean,
  subscribe: boolean,
};

type Props = {
  location: Object,
  history: Object,
};

export const LoginPage = ({ location, history }: Props): Node => {
  const { user, userService, dispatchUser } = useContext(UserContext);
  useEffect(() => {
    if (location.pathname === '/redirect') {
      const token = location.pathname.substring(10);
      localStorage.setItem('token', token);
      setAuthToken(token);
      userService.get();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [showLogin, setShowLogin] = useState(true);
  const [state, setState] = useState<InputFields>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agree: false,
    subscribe: false,
  });

  const handleSwitchForm = () => {
    setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      agree: false,
      subscribe: false,
    });

    setShowLogin(!showLogin);
    dispatchUser({ type: Types.REMOVE_ERRORS, payload: {} });
  };

  const { from } = location.state || {
    from: { pathname: '/workspaces' },
  };

  if (user.isAuthenticated) {
    return <Redirect to={from} />;
  }

  const { firstName, lastName, email, password, agree } = state;

  const { errors } = user;

  const handleChange = (e: { target: HTMLInputElement }) => {
    const { id, type, checked, value } = e.target;
    setState({
      ...state,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleLogin = (e: Event) => {
    e.preventDefault();

    const newUser = { email, password };
    userService.signin(newUser);
  };

  const handleSignup = (e: Event) => {
    e.preventDefault();

    const newUser = { fname: firstName, lname: lastName, email, password };
    userService.signup(newUser, history);
  };

  return (
    <div className="login_page">
      <div className="singnup__link">
        <span className="singnup__link--text">
          {showLogin ? (
            <span>Don't have an account yet?</span>
          ) : (
            <span>Already have an account?</span>
          )}{' '}
        </span>
        <Button
          label={showLogin ? 'Sign Up' : 'Sign In'}
          size="sm"
          variant="outline"
          onClick={handleSwitchForm}
        />
      </div>

      <div className="login">
        <span className="login__logo">LOGO</span>
        <div className="login__form">
          <div className="form__title">Hello, Good to know you :D</div>
          <form className="form__inputs">
            {!showLogin && (
              <>
                <InputField
                  type="text"
                  id="firstName"
                  labelText="First Name"
                  variant="primary"
                  placeholder="Bruce Wane"
                  name="firstName"
                  value={firstName}
                  handleChange={handleChange}
                  isRequired
                  error={errors && errors.fname}
                />

                <InputField
                  type="text"
                  id="lastName"
                  labelText="Last Name"
                  variant="primary"
                  placeholder="Bruce Wane"
                  name="lastName"
                  value={lastName}
                  handleChange={handleChange}
                  isRequired
                  error={errors && errors.lname}
                />
              </>
            )}

            <InputField
              type="text"
              id="email"
              labelText="Email"
              variant="primary"
              placeholder="Bruce@yahoo.com"
              value={email}
              handleChange={handleChange}
              isRequired
              error={errors && errors.email}
            />
            <InputField
              type="password"
              id="password"
              labelText="Password"
              variant="primary"
              placeholder="At least 6 charachters"
              value={password}
              isSignin={showLogin}
              handleChange={handleChange}
              isRequired
              error={errors && errors.password}
            />
            {showLogin && (
              <Link className="password" to="/forgotpassword">
                I forgot my password
              </Link>
            )}
            {!showLogin && (
              <div className="form__checkbox">
                <InputField
                  type="checkbox"
                  name="agree"
                  id="agree"
                  labelText=" I agree to Integrify's Terms and Services and privacy policy"
                  handleChange={handleChange}
                />
              </div>
            )}
            <div className="login__button">
              <Button
                label={showLogin ? 'Login' : 'Create my free account'}
                variant="secondary"
                size="lg"
                onClick={showLogin ? handleLogin : handleSignup}
                disabled={showLogin ? false : !agree}
              />
            </div>
          </form>
          {showLogin && (
            <div>
              <div className="login__split"></div>
              <SocialLogin />
            </div>
          )}
          {user.errors && (
            <div
              style={{
                color: 'var(--color-danger)',
                textAlign: 'center',
                marginTop: '30px',
              }}
            >
              {user.errors.error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
