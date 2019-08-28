// @flow

import React, { createContext, useReducer } from 'react';
import type { Node } from 'react';

import { initialState, reducer } from '../reducers/dataReducer';
import { useDataService } from '../services/dataService';

export const DataContext = createContext<Object>();

type Props = {
  children: ?Node,
};

export function DataProvider({ children }: Props) {
  const [data, dispatchData] = useReducer(reducer, initialState);
  const dataService = useDataService(dispatchData);

  return (
    <DataContext.Provider
      value={{
        data,
        dispatchData,
        dataService,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
