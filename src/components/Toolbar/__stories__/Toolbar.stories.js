// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import Toolbar, { Testroute } from '..';

const Example = ({ value }: any) => <h1>Display the {value} component</h1>;

const workspaces = [{ id: 1, name: 'My workspace', templates: 1 }];

const handleClick = {
  workspaceClick: () => alert('workspace click'),
  buttonPlusClick: () => alert('create modal'),
  buttonSearchClick: () => alert('search modal'),
};

storiesOf('Toolbar', module)
  .addDecorator(jsxDecorator)
  .add('Toolbar', () => (
    <Toolbar
      handleWorkspaceClick={handleClick.workspaceClick}
      handleCreateModal={handleClick.buttonPlusClick}
      handleSearchModal={handleClick.buttonSearchClick}
      workspaces={workspaces}
    />
  ))
  .add('theme', () => (
    <Toolbar
      handleWorkspaceClick={handleClick.workspaceClick}
      handleCreateModal={() => {}}
      handleSearchModal={() => {}}
      variant="theme"
    >
      <Example value="question" />
      <Example value="theme" />
      <Example value="noti" />
    </Toolbar>
  ))
  .add('route', () => <Testroute />);
