// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import Navbar from '..';

const onSaveClick = value => () => {
  alert(value);
};
const onViewClick = value => () => {
  alert(value);
};
const onBackIconClick = value => () => {
  alert(value);
};

storiesOf('Navbar', module)
  .addDecorator(jsxDecorator)
  .add('workspace', () => <Navbar isWorkspase />)
  .add('template', () => (
    <Navbar
      templateName="My template"
      handleSave={onSaveClick('Save')}
      handleView={onViewClick('View')}
      handleBack={onBackIconClick('go back')}
    />
  ));
