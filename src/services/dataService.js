/* eslint-disable no-shadow */
// @flow

import { customAxios } from './customAxios';
import { Types } from '../reducers/actionTypes';

export function useDataService(dispatch: Function) {
  const workspaceURL = '/workspaces';
  const templateURL = '/templates';
  const formURL = '/forms';

  // WORKSPACE
  const getWorkspaces = async () => {
    try {
      const res = await customAxios.get(workspaceURL);

      const workspaces = await Promise.all(
        res.data.map(async workspace => {
          // Use this boolean to check whether workspace's templates have been fetched
          workspace.templatesFetched = false;

          // Get workspace's collaborators
          const res = await customAxios.get(
            `${workspaceURL}/${workspace._id}/collaborators`
          );
          workspace.collaborators = res.data;
          return workspace;
        })
      );

      dispatch({ type: Types.ADD_WORKSPACES, payload: { workspaces } });
    } catch (err) {
      console.log(err);
    }
  };

  const getWorkspaceTemplates = async (workspace: Object) => {
    const id = workspace._id;

    const res = await customAxios.get(`${workspaceURL}/${id}/templates`);
    const templates = await Promise.all(
      res.data.map(async template => {
        // Use this boolean to check whether template's forms have been fetched
        template.formsFetched = false;

        // Get template's theme
        const res = await customAxios.get(
          `${templateURL}/${template._id}/theme`
        );
        template.theme = res.data;
        return template;
      })
    );

    workspace.templatesFetched = true;

    dispatch({
      type: Types.ADD_WORKSPACE_TEMPLATES,
      payload: { workspace, templates },
    });
  };

  const createWorkspace = (user: Object, workspaceItem: Object) => {
    customAxios
      .post(workspaceURL, workspaceItem)
      .then(res => {
        const workspace = res.data;
        workspace.collaborators = [{ _id: user.id, fname: user.fname }];
        dispatch({
          type: Types.ADD_WORKSPACE,
          payload: { workspace },
        });
      })
      .catch(err => console.log(err));
  };

  const updateWorkspace = (workspace: Object) =>
    customAxios.put(workspaceURL, workspace);

  const removeWorkspace = (id: string) => {
    customAxios
      .delete(`${workspaceURL}/${id}`)
      .then(res =>
        dispatch({ type: Types.REMOVE_WORKSPACE, payload: { workspaceId: id } })
      );
  };

  // TEMPLATE

  const getTemplateTheme = (id: string) =>
    customAxios.get(`${templateURL}/${id}/theme`);

  const createTemplate = (template: Object) => {
    customAxios
      .post(templateURL, template)
      .then(res => {
        getTemplateTheme(res.data._id).then(theme =>
          dispatch({
            type: Types.ADD_TEMPLATE,
            payload: { template: { ...res.data, theme: theme.data } },
          })
        );
      })
      .catch(err => console.log(err));
  };

  const getTemplate = (id: string) => customAxios.get(`${templateURL}/${id}`);

  const getTemplateForms = (id: string) =>
    customAxios.get(`${templateURL}/${id}/forms`);

  const updateTemplate = (template: Object) => {
    customAxios
      .put(templateURL, { ...template, theme: template.theme._id })
      .then(res =>
        dispatch({ type: Types.UPDATE_TEMPLATE, payload: { template } })
      )
      .catch(err => console.log(err));
  };

  const removeTemplate = (template: Object) => {
    customAxios
      .delete(`${templateURL}/${template._id}`)
      .then(res =>
        dispatch({ type: Types.REMOVE_TEMPLATE, payload: { template } })
      )
      .catch(err => console.log(err));
  };

  // FORM
  const createForm = (templateId: string, questions: Array<Object>) => {
    const body = { templateId, questions };
    return customAxios.post(formURL, body);
  };

  const removeForm = (formId: string) =>
    customAxios.delete(`${formURL}/${formId}`);

  // THEME
  const themeURL = '/themes';

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

  const createTheme = (theme: Object) => {
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

  const getUserThemes = () => {
    customAxios
      .get(themeURL)
      .then(res =>
        dispatch({ type: Types.SET_USER_THEMES, payload: { themes: res.data } })
      )
      .catch(err => console.log(err));
  };

  const updateTheme = (theme: Object) => {
    customAxios
      .put(themeURL, theme)
      .then(res => dispatch({ type: Types.UPDATE_THEME, payload: { theme } }));
  };

  const removeTheme = (id: string) => {
    customAxios
      .delete(`${themeURL}/${id}`)
      .then(res =>
        dispatch({ type: Types.REMOVE_THEME, payload: { themeId: id } })
      );
  };

  return {
    createWorkspace,
    getWorkspaces,
    getWorkspaceTemplates,
    updateWorkspace,
    removeWorkspace,
    createTemplate,
    getTemplate,
    getTemplateForms,
    getTemplateTheme,
    updateTemplate,
    removeTemplate,
    createForm,
    removeForm,
    getPublicThemes,
    createTheme,
    getUserThemes,
    updateTheme,
    removeTheme,
  };
}
