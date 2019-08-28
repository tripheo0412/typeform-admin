// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Share } from '..';

storiesOf('Share link', module)
  .addDecorator(jsxDecorator)
  .add('default', () => (
    <Share link="https://mahdinajjarian.typeform.com/to/bVpHlu" />
  ));
