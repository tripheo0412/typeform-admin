import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import ForgotPasswordPage from '..';
import { UserProvider } from '../../../contexts/UserContext';

storiesOf('ForgotPasswordPage', module)
  .addDecorator(jsxDecorator)
  .add('default', () => (
    <UserProvider value={{ user: { isAuthenticated: false, user: {} } }}>
      <ForgotPasswordPage emailAddress="john.doe@gmail.com" />
    </UserProvider>
  ));
