// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import EmailNotification from '..';

storiesOf('Email Notification', module)
  .addDecorator(jsxDecorator)
  .add('default', () => (
    <EmailNotification handleEmailNotification={() => {}} />
  ));
