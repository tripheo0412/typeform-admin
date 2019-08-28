// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from '../../../contexts/ThemeContext';
import { UserProvider } from '../../../contexts/UserContext';

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

const tempObject = { name: 'Temp' };

storiesOf('Navbar', module)
  .addDecorator(jsxDecorator)
  .add('workspace', () => (
    <UserProvider>
      <ThemeProvider>
        <Navbar
          isWorkspace
          history={tempObject}
          match={tempObject}
          location={tempObject}
          user={tempObject}
        />
      </ThemeProvider>
    </UserProvider>
  ))
  .add('template', () => (
    <UserProvider>
      <ThemeProvider>
        <Navbar
          templateName="My template"
          history={tempObject}
          match={tempObject}
          location={tempObject}
          user={tempObject}
          handleSave={onSaveClick('Save')}
          handleView={onViewClick('View')}
          handleBack={onBackIconClick('go back')}
        />
      </ThemeProvider>
    </UserProvider>
  ));
