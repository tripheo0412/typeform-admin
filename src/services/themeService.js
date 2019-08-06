// @flow

import { Types } from '../reducers/actionTypes';
import { customAxios } from './customAxios';

const themeURL = '/themes';

export function useThemeService(state: Object, dispatch: Function) {
  const create = (theme: Object) => {
    customAxios
      .post(themeURL, theme)
      .then(res =>
        dispatch({
          type: Types.CREATE_THEME,
          payload: { theme: res.data },
        })
      )
      .catch(err => console.log(err));
  };

  const getPublicThemes = () => {
    customAxios
      .get(`${themeURL}/public`)
      .then(res =>
        dispatch({
          type: Types.SET_PUBLIC_THEMES,
          payload: { themes: res.data },
        })
      )
      .catch(err => console.log(err));
  };

  const getUserThemes = () => {
    customAxios
      .get(themeURL)
      .then(res =>
        dispatch({ type: Types.SET_USER_THEMES, payload: { themes: res.data } })
      )
      .catch(err => console.log(err));
  };

  const update = (theme: Object) => {
    customAxios
      .put(themeURL, theme)
      .then(res => dispatch({ type: Types.UPDATE_THEME, payload: { theme } }));
  };

  const remove = (id: string) => {
    customAxios
      .delete(`${themeURL}/${id}`)
      .then(res =>
        dispatch({ type: Types.REMOVE_THEME, payload: { themeId: id } })
      );
  };

  return { create, getPublicThemes, getUserThemes, update, remove };
}
