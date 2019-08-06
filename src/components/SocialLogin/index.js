/* eslint-disable no-use-before-define */
import * as React from 'react';
import './styles.scss';

const GOOGLE_BUTTON_ID = 'google-sign-in-button';

export const SocialLogin = () => {
  React.useEffect(() => {
    window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
      width: 255,
      height: 40,
      onsuccess: onSuccess,
    });

    window.fbAsyncInit = () => {
      window.FB.init({
        appId: '',
        cookie: true,
        status: true,
        xfbml: true,
        version: 'v3.3',
      });
    };
  });

  const onSuccess = () => {};
  return (
    <div className="social__login">
      <div id={GOOGLE_BUTTON_ID}></div>
      <div
        className="fb-login-button"
        data-width=""
        data-size="large"
        data-button-type="continue_with"
        data-auto-logout-link="false"
        data-use-continue-as="false"
      ></div>
    </div>
  );
};

export default SocialLogin;
