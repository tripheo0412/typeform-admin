// @flow

import { Types } from './actionTypes';

export const initialState = {
  isAuthenticated: false,
  user: {},
};

export function reducer(state: Object = initialState, action: Object): Object {
  const { user } = action.payload;
  switch (action.type) {
    case Types.SET_USER:
      return { ...state, user, isAuthenticated: true };

    case Types.UPDATE_USER:
      return { ...state, user };

    case Types.REMOVE_USER:
      return { ...state, user: {}, isAuthenticated: false };

    default:
      return state;
  }
}
