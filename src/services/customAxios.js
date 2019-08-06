import axios from 'axios';

export const customAxios = axios.create({
  baseURL: 'https://typeform-resource-server.tripheo0412.now.sh',
});
export const authAxios = axios.create({
  baseURL: 'https://typeform-auth-server.tripheo0412.now.sh',
});

export const setAuthToken = token => {
  if (token) {
    customAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete customAxios.defaults.headers.common.Authorization;
  }
};
