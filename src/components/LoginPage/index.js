// @flow
import React, { useState, useContext } from 'react';
import type { Node } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { UserContext } from '../../contexts/UserContext';
import { InputField } from '../InputField';
import { Button } from '../Button';
// import SocialLogin from '../SocialLogin';
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
  const { user, userService } = useContext(UserContext);

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
  };

  const { from } = location.state || {
    from: { pathname: '/workspaces' },
  };

  if (user.isAuthenticated) {
    return <Redirect to={from} />;
  }

  const { firstName, lastName, email, password, agree } = state;

  const handleChange = (e: { target: HTMLInputElement }) => {
    const { id, type, checked, value } = e.target;
    setState({
      ...state,
      [id]: type === 'checkbox' ? checked : value,
    });
    console.log(process.env.REACT_APP_FACEBOOK_APP_ID);
  };

  const responseGoogle = response => {
    console.log(response);
  };
  const responseFacebook = response => {
    console.log(response);
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
            />
            {showLogin && (
              <>
                <Link className="password" to="/forgotpassword">
                  I forgot my password
                </Link>
              </>
            )}
            {!showLogin && (
              <>
                <div className="form__checkbox">
                  <InputField
                    type="checkbox"
                    name="agree"
                    id="agree"
                    labelText=" I agree to Integrify's Terms and Services and privacy policy"
                    handleChange={handleChange}
                  />
                </div>

                <div className="form__checkbox">
                  <InputField
                    type="checkbox"
                    name="subscribe"
                    id="subscribe"
                    labelText="I'd like to get usefull tips, inspiration, and offers via
                    email(unsubscribe at any time)"
                    handleChange={handleChange}
                  />
                </div>
              </>
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
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />

              <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                autoLoad
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
