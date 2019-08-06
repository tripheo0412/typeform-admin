// @flow

import { Types } from '../reducers/actionTypes';
import { customAxios } from './customAxios';

const formURL = '/forms';

export function useFormService(state: Object, dispatch: Function) {
  const create = (
    templateURL: string,
    templateId: string,
    questions: Array<Object>
  ) => {
    const body = { templateURL, templateId, questions };
    customAxios
      .post(formURL, body)
      .then(res =>
        dispatch({ type: Types.CREATE_FORM, payload: { form: res.data } })
      )
      .catch(err => console.log(err));
  };

  const remove = (formId: string) => {
    customAxios
      .delete(`${formURL}/${formId}`)
      .then(res => dispatch({ type: Types.REMOVE_FORM, payload: { formId } }))
      .catch(err => console.log(err));
  };

  return { create, remove };
}
