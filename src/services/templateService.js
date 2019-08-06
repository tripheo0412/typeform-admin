// @flow

import { Types } from '../reducers/actionTypes';
import { customAxios } from './customAxios';

const templateURL = '/templates';

export function useTemplateService(state: Object, dispatch: Function) {
  const create = (template: Object) => {
    customAxios
      .post(templateURL, template)
      .then(res =>
        dispatch({
          type: Types.CREATE_TEMPLATE,
          payload: { template: res.data },
        })
      )
      .catch(err => console.log(err));
  };

  const getAllForms = (id: string) => {
    customAxios
      .get(`${templateURL}/${id}/forms`)
      .then(res =>
        dispatch({ type: Types.SET_FORMS, payload: { forms: res.data } })
      )
      .catch(err => console.log(err));
  };

  const update = (template: Object) => {
    customAxios
      .put(templateURL, template)
      .then(res =>
        dispatch({ type: Types.UPDATE_TEMPLATE, payload: { template } })
      );
  };

  const remove = (id: string) => {
    customAxios
      .delete(`${templateURL}/${id}`)
      .then(res =>
        dispatch({ type: Types.REMOVE_TEMPLATE, payload: { templateId: id } })
      );
  };

  return { create, getAllForms, update, remove };
}
