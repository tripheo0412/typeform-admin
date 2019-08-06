// @flow

import { Types } from './actionTypes';

export const initialState = {
  workspaces: [],
  templates: [],
  forms: [],
  themes: {
    public: [],
    private: [],
  },
};

export function reducer(state: Object = initialState, action: Object): Object {
  const {
    workspace,
    workspaces,
    workspaceId,
    template,
    templates,
    templateId,
    form,
    forms,
    formId,
    theme,
    themes,
    themeId,
  } = action.payload;

  switch (action.type) {
    // workspaces
    case Types.SET_WORKSPACES:
      return { ...state, workspaces };
    case Types.CREATE_WORKSPACE:
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
    case Types.REMOVE_WORKSPACE:
      return {
        ...state,
        workspaces: state.workspaces.filter(
          workspaceItem => workspaceItem.id !== workspaceId
        ),
      };

    // templates
    case Types.SET_TEMPLATES:
      return {
        ...state,
        templates,
      };
    case Types.CREATE_TEMPLATE:
      return {
        ...state,
        templates: [...state.templates, template],
      };
    case Types.UPDATE_TEMPLATE:
      return {
        ...state,
        templates: state.templates.map(templateItem =>
          templateItem.id === template.id ? template : templateItem
        ),
      };
    case Types.REMOVE_TEMPLATE:
      return {
        ...state,
        templates: state.templates.filter(
          templateItem => templateItem.id !== templateId
        ),
      };

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
        themes: {
          ...state.themes,
          public: themes,
        },
      };
    case Types.SET_USER_THEMES:
      return {
        ...state,
        themes: {
          ...state.themes,
          private: themes,
        },
      };
    case Types.CREATE_THEME:
      return {
        ...state,
        themes: {
          ...state.themes,
          private: [...state.themes.private, theme],
        },
      };
    case Types.UPDATE_THEME:
      return {
        ...state,
        themes: {
          ...state.themes,
          private: state.themes.private.map(themeItem =>
            themeItem.id === theme.id ? theme : themeItem
          ),
        },
      };
    case Types.REMOVE_THEME:
      return {
        ...state,
        themes: {
          ...state.themes,
          private: state.themes.private.filter(
            themeItem => themeItem.id !== themeId
          ),
        },
      };

    default:
      return state;
  }
}
