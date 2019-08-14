/* eslint-disable no-use-before-define */
import * as React from 'react';
import './styles.scss';

import FacebookLogin from 'react-facebook-login';

const GOOGLE_BUTTON_ID =
  '96649280732-gnu1j75n4srhjurp5kqerpckvib9e8ap.apps.googleusercontent.com';

export const SocialLogin = () => {
  React.useEffect(() => {
    window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
      width: 255,
      height: 40,
      onsuccess: onSuccess,
    });
  });
  const responseFacebook = res => {
    console.log(res);
  };
  const onSuccess = res => {
    console.log(res);
  };
  return (
    <div className="social__login">
      <div id={GOOGLE_BUTTON_ID}></div>

      <FacebookLogin
        appId="314728102812977"
        autoLoad
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="facebook__login"
        icon="fa-facebook"
      />
    </div>
  );
};

export default SocialLogin;
