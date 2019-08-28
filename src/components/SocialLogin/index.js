/* eslint-disable no-use-before-define */
import * as React from 'react';
import './styles.scss';

export const SocialLogin = () => (
  <div className="social__login">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
    <a href="https://typeform-clone-auth-tripheo0412.now.sh/users/oauth/facebook">
      <button type="button" className="facebook__login metro">
        <i className="fa fa-facebook"></i>
        <span>Login with Facebook</span>
      </button>
    </a>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
    <a href="https://typeform-clone-auth-tripheo0412.now.sh/users/oauth/google">
      <button type="button" className="google__login metro">
        <i className="fa fa-google"></i>
        <span>Login with Google</span>
      </button>
    </a>
  </div>
);

export default SocialLogin;
