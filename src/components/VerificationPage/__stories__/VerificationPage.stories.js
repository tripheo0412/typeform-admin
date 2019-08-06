import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { VerificationPage } from '..';
import { UserProvider } from '../../../contexts/UserContext';

storiesOf('VerificationPage', module)
  .addDecorator(jsxDecorator)
  .add('default', () => (
    <UserProvider value={{ user: { isAuthenticated: false, user: {} } }}>
      <VerificationPage emailAddress="asds@yahoo.com" />
    </UserProvider>
  ));
