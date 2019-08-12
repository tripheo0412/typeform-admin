import axios from 'axios';

export const customAxios = axios.create({
  baseURL: 'https://typeform-clone-resource-tripheo0412.now.sh',
});
export const authAxios = axios.create({
  baseURL: 'https://typeform-clone-auth-tripheo0412.now.sh',
});

export const setAuthToken = token => {
  if (token) {
    customAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete customAxios.defaults.headers.common.Authorization;
  }
};
