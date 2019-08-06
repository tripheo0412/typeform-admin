import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import Workspace from '..';

storiesOf('Workspace', module)
  .addDecorator(jsxDecorator)
  .add('default', () => <Workspace />);
