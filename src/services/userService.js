/* eslint-disable no-console */
// @flow
import { Types } from '../reducers/actionTypes';
import { authAxios, customAxios, setAuthToken } from './customAxios';
import { formatErrors } from '../utils/formatErrors';

const userURL = '/users';
export const useUserService = (state: Object, dispatch: Function) => {
  const get = () => {
    customAxios
      .get(userURL)
      .then(res => {
        dispatch({
          type: Types.SET_USER,
          payload: { user: res.data },
        });
      })
      .catch(err => console.log(err));
  };
  const signin = (credential: Object) => {
    authAxios
      .post(`${userURL}/signin`, credential, {
        withCredentials: true,
      })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        setAuthToken(res.data.token);
        get();
      })
      .catch(err => {
        dispatch({
          type: Types.SET_ERRORS,
          payload: { errors: formatErrors(err.response.data) },
        });
      });
  };

  const signinGoogle = () => {
    authAxios
      .get(`${userURL}/oauth/google`)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        setAuthToken(res.data.token);
        get();
      })
      .catch(err => console.log(err));
  };
  const signinFacebook = () => {
    authAxios
      .get(`${userURL}/oauth/facebook`)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        setAuthToken(res.data.token);
        get();
      })
      .catch(err => console.log(err));
  };
  const getNewToken = () => {
    authAxios
      .get(`${userURL}/newtoken`)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  const sendAccountVerifyEmail = (email: Object) => {
    authAxios
      .post(`${userURL}/verify/new`, email)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  const setNewPassword = (password: Object) => {
    authAxios
      .post(`${userURL}/password/change`, password)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  const signup = (user: Object, history: Object) => {
    customAxios
      .post(`${userURL}/signup`, user)
      .then(res => {
        history.push('/verification');
        console.log(res);
      })
      .catch(err =>
        dispatch({
          type: Types.SET_ERRORS,
          payload: { errors: formatErrors(err.response.data) },
        })
      );
  };
  const resetPassword = (email: Object) => {
    authAxios
      .post(`${userURL}/password/reset`, email)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  const remove = () => {
    customAxios
      .delete(userURL)
      .then(res => {
        dispatch({
          type: Types.REMOVE_USER,
          payload: { user: {} },
        });
      })
      .catch(err => console.log(err));
  };
  const update = (user: Object) => {
    customAxios
      .patch(userURL, user)
      .then(res => {
        dispatch({
          type: Types.UPDATE_USER,
          payload: { user },
        });
      })
      .catch(err => console.log(err));
  };

  const signout = () => {
    authAxios.get(`${userURL}/signout`, {
      withCredentials: true,
    });

    localStorage.removeItem('token');
    setAuthToken();
    window.location.href = '/';
  };
  return {
    signup,
    signin,
    signout,
    get,
    remove,
    update,
    signinFacebook,
    signinGoogle,
    getNewToken,
    sendAccountVerifyEmail,
    setNewPassword,
    resetPassword,
  };
};
