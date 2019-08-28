// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import PopUp from '..';

const onSubmitClick = value => () => {
  alert(value);
};
const oncancelClick = value => () => {
  alert(value);
};

storiesOf('PopUp Modal', module)
  .addDecorator(jsxDecorator)
  .add('Rename', () => (
    <PopUp
      title="Rename this template"
      buttonSubmit="save"
      handleSubmit={onSubmitClick('Save')}
      handleCancel={oncancelClick('Cancel')}
      theme="dark"
    />
  ))
  .add('Delete', () => (
    <PopUp
      title="Are you sure to delete this template?"
      buttonSubmit="delete"
      handleSubmit={onSubmitClick('Delete')}
      handleCancel={oncancelClick('Cancel')}
    />
  ))
  .add('Create Workspace', () => (
    <PopUp
      title="Create a new Workspace"
      buttonSubmit="create"
      handleSubmit={onSubmitClick('Create')}
      handleCancel={oncancelClick('Cancel')}
    />
  ))
  .add('Search', () => (
    <PopUp isSearch handleSubmit={onSubmitClick('Create')} />
  ))
  .add('Search with results', () => (
    <PopUp
      isSearch
      searchResults={['demo', 'demo1']}
      handleSubmit={onSubmitClick('Create')}
    />
  ));
