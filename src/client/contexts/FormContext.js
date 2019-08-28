// @flow
import * as React from 'react';
import { initialState, reducer } from '../reducers/formReducer';
import useFormService from '../services/formServices';

const FormContext = React.createContext<Object>(initialState);

type Props = {
  children?: React.Node,
};
const Provider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const formService = useFormService(state, dispatch);
  return (
    <FormContext.Provider value={{ state, dispatch, formService }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, Provider };
