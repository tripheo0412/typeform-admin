// @flow

import { Types } from '../reducers/actionTypes';
import { customAxios } from './customAxios';

const formURL = '/forms';

export default function useFormService(state: Object, dispatch: Function) {
  const update = (form: Object, shortId: string) => {
    customAxios
      .patch(`${formURL}${shortId}`, form)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  const get = (shortId: string) => {
    customAxios
      .get(`${formURL}${shortId}`)
      .then(res => {
        console.log(res.data);
        dispatch({ type: Types.SET_FORM, payload: { data: res.data } });
      })
      .catch(err => console.log(err));
  };

  return { get, update };
}
