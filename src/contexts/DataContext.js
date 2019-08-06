// @flow

import React, { createContext, useReducer } from 'react';
import type { Node } from 'react';

import { initialState, reducer } from '../reducers/dataReducer';
import { useWorkspaceService } from '../services/workspaceService';
import { useTemplateService } from '../services/templateService';
import { useFormService } from '../services/formService';
import { useThemeService } from '../services/themeService';

export const DataContext = createContext<Object>();

type Props = {
  children: ?Node,
};

export function DataProvider({ children }: Props) {
  const [data, dispatchData] = useReducer(reducer, initialState);
  const workspaceService = useWorkspaceService(data, dispatchData);
  const templateService = useTemplateService(data, dispatchData);
  const formService = useFormService(data, dispatchData);
  const themeService = useThemeService(data, dispatchData);

  return (
    <DataContext.Provider
      value={{
        data,
        dispatchData,
        workspaceService,
        templateService,
        formService,
        themeService,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
