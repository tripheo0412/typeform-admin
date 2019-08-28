// @flow

import { Types } from './actionTypes';

export const initialState = {
  workspaces: [],
  workspacesFetched: false,
  templates: [],
  forms: [],
  publicThemes: [],
  publicThemesFetched: false,
  privateThemes: [],
  privateThemesFetched: false,
  errors: {},
};

export function reducer(state: Object = initialState, action: Object): Object {
  const {
    workspace,
    workspaces,
    workspaceId,
    template,
    templates,
    form,
    forms,
    formId,
    theme,
    themes,
    themeId,
    errors,
  } = action.payload;

  switch (action.type) {
    // workspaces
    case Types.ADD_WORKSPACES:
      return { ...state, workspaces, workspacesFetched: true };
    case Types.ADD_WORKSPACE_TEMPLATES: {
      const newWorkspaces = state.workspaces.map(workspaceItem => {
        if (workspaceItem._id === workspace._id) {
          return workspace;
        }
        return workspaceItem;
      });

      return {
        ...state,
        workspaces: newWorkspaces,
        templates: state.templates.concat(templates),
      };
    }
    case Types.ADD_WORKSPACE:
      return {
        ...state,
        workspaces: [...state.workspaces, workspace],
      };
    case Types.UPDATE_WORKSPACE:
      return {
        ...state,
        workspaces: state.workspaces.map(workspaceItem =>
          workspaceItem.id === workspace.id ? workspace : workspaceItem
        ),
      };
    case Types.REMOVE_WORKSPACE: {
      const newWorkspaces = state.workspaces.filter(
        workspaceItem => workspaceItem._id !== workspaceId
      );

      const removedTemplates = [];
      const newTemplates = state.templates.filter(templateItem => {
        if (templateItem.workspaceId === workspaceId) {
          removedTemplates.push(templateItem);
          return false;
        }
        return true;
      });

      const newForms = [];
      removedTemplates.forEach(templateItem => {
        newForms.concat(
          state.forms.filter(
            formItem => formItem.templateId !== templateItem._id
          )
        );
      });

      return {
        ...state,
        workspaces: newWorkspaces,
        templates: newTemplates,
        forms: newForms,
      };
    }

    // templates
    case Types.SET_TEMPLATES:
      return {
        ...state,
        templates,
      };
    case Types.ADD_TEMPLATE: {
      const newWorkspaces = state.workspaces.map(workspaceItem => {
        if (workspaceItem._id === template.workspaceId) {
          workspaceItem.templates.push(template._id);
        }
        return workspaceItem;
      });

      return {
        ...state,
        workspaces: newWorkspaces,
        templates: [...state.templates, template],
      };
    }
    case Types.UPDATE_TEMPLATE:
      return {
        ...state,
        templates: state.templates.map(templateItem =>
          templateItem._id === template._id ? template : templateItem
        ),
      };
    case Types.REMOVE_TEMPLATE: {
      const newWorkspaces = state.workspaces.map(workspaceItem => {
        if (workspaceItem._id === template.workspaceId) {
          workspaceItem.templates.pop();
        }
        return workspaceItem;
      });

      const newTemplates = state.templates.filter(
        templateItem => templateItem._id !== template._id
      );

      const newForms = state.forms.filter(
        formItem => formItem.templateId !== template._id
      );

      return {
        ...state,
        workspaces: newWorkspaces,
        templates: newTemplates,
        forms: newForms,
      };
    }

    // forms
    case Types.SET_FORMS:
      return { ...state, forms };
    case Types.CREATE_FORM:
      return { ...state, forms: [...state.forms, form] };
    case Types.REMOVE_FORM:
      return {
        ...state,
        forms: state.forms.filter(formItem => formItem.id !== formId),
      };

    // themes
    case Types.SET_PUBLIC_THEMES:
      return {
        ...state,
        publicThemes: themes,
        publicThemesFetched: true,
      };
    case Types.CREATE_THEME:
      return {
        ...state,
        privateThemes: [...state.privateThemes, theme],
      };
    case Types.SET_USER_THEMES:
      return {
        ...state,
        privateThemes: themes,
        privateThemesFetched: true,
      };
    case Types.UPDATE_THEME:
      return {
        ...state,
        private: state.privateThemes.map(themeItem =>
          themeItem._id === theme._id ? theme : themeItem
        ),
      };
    case Types.REMOVE_THEME:
      return {
        ...state,
        private: state.privateThemes.filter(
          themeItem => themeItem._id !== themeId
        ),
      };

    case Types.SET_ERRORS:
      return { ...state, errors };

    case Types.REMOVE_ERRORS:
      return { ...state, errors: {} };

    default:
      return state;
  }
}
