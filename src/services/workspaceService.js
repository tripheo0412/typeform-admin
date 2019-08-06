// @flow

import { Types } from '../reducers/actionTypes';
import { customAxios } from './customAxios';

const workspaceURL = '/workspaces';

export function useWorkspaceService(state: Object, dispatch: Function) {
  const create = (workspace: Object) => {
    customAxios
      .post(workspaceURL, workspace)
      .then(res =>
        dispatch({
          type: Types.CREATE_WORKSPACE,
          payload: { workspace: res.data },
        })
      )
      .catch(err => console.log(err));
  };

  const getAll = () => {
    customAxios
      .get(workspaceURL)
      .then(res => {
        dispatch({
          type: Types.SET_WORKSPACES,
          payload: { workspaces: res.data },
        });
      })
      .catch(err => console.log(err));
  };

  const getById = (id: string) => {
    const workspace = state.workspaces.filter(
      workspaceItem => workspaceItem.id === id
    );
    customAxios
      .get(`${workspaceURL}/${id}`)
      .then(res => {
        workspace.collaborators = res.data.collaborators;
        dispatch({ type: Types.UPDATE_WORKSPACE, payload: { workspace } });
        dispatch({
          type: Types.SET_TEMPLATES,
          payload: { templates: res.data.templates },
        });
      })
      .catch(err => console.log(err));
  };

  const update = (workspace: Object) => {
    customAxios
      .put(workspaceURL, workspace)
      .then(res =>
        dispatch({
          type: Types.UPDATE_WORKSPACE,
          payload: { workspace },
        })
      )
      .catch(err => console.log(err));
  };

  const remove = (id: string) => {
    customAxios
      .delete(`${workspaceURL}/${id}`)
      .then(res =>
        dispatch({ type: Types.REMOVE_WORKSPACE, payload: { workspaceId: id } })
      );
  };

  return { create, getAll, getById, update, remove };
}
