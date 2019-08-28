// @flow

import { Types } from './actionTypes';

export const initialState = {
  isAuthenticated: false,
  user: {},
  errors: {},
};

export function reducer(state: Object = initialState, action: Object): Object {
  const { user, errors } = action.payload;
  switch (action.type) {
    case Types.SET_USER:
      return { ...state, user, isAuthenticated: true };

    case Types.UPDATE_USER:
      return { ...state, user };

    case Types.REMOVE_USER:
      return { ...state, user: {}, isAuthenticated: false };

    case Types.SET_ERRORS:
      return { ...state, errors };

    case Types.REMOVE_ERRORS:
      return { ...state, errors: {} };

    default:
      return state;
  }
}
