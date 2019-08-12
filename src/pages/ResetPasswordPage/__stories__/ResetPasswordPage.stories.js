import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ResetPasswordPage } from '..';

storiesOf('ResetPasswordPage', module)
  .addDecorator(jsxDecorator)
  .add('default', () => <ResetPasswordPage />);
