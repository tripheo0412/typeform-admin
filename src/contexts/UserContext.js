// @flow

import React, { createContext, useReducer } from 'react';
import type { Node } from 'react';
import { initialState, reducer } from '../reducers/userReducer';
import { useUserService } from '../services/userService';

export const UserContext = createContext<Object>();

type Props = {
  children: ?Node,
};

export function UserProvider({ children }: Props) {
  const [user, dispatchUser] = useReducer(reducer, initialState);
  const userService = useUserService(user, dispatchUser);

  return (
    <UserContext.Provider value={{ user, dispatchUser, userService }}>
      {children}
    </UserContext.Provider>
  );
}
