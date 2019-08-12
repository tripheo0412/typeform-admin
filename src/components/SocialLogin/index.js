/* eslint-disable no-use-before-define */
import * as React from 'react';
import './styles.scss';

const GOOGLE_BUTTON_ID =
  '96649280732-gnu1j75n4srhjurp5kqerpckvib9e8ap.apps.googleusercontent.com';

export const SocialLogin = () => {
  React.useEffect(() => {
    window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
      width: 255,
      height: 40,
      onsuccess: onSuccess,
    });

    window.fbAsyncInit = () => {
      window.FB.init({
        appId: '314728102812977',
        cookie: true,
        status: true,
        xfbml: true,
        version: 'v3.3',
      });
    };
  });

  const onSuccess = response => {
    console.log(response);
  };
  const checkLoginState = () => {
    window.FB.getLoginStatus(function(response) {
      console.log(response);
    });
  };
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
        onlogin={checkLoginState}
      ></div>
    </div>
  );
};

export default SocialLogin;
