import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import StoryRouter from 'storybook-react-router';

import { LoginPage } from '..';
import { UserProvider } from '../../../contexts/UserContext';

storiesOf('LoginPage', module)
  .addDecorator(StoryRouter())
  .addDecorator(jsxDecorator)

  .add('default', () => (
    <UserProvider value={{ user: { isAuthenticated: false, user: {} } }}>
      <LoginPage location={{ state: { from: { pathname: '/test' } } }} />
    </UserProvider>
  ));
