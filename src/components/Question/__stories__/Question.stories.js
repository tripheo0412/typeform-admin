// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import Question from '..';

storiesOf('Question', module)
  .addDecorator(jsxDecorator)
  .add('Default', () => (
    <div>
      <Question />
      <Question />
    </div>
  ))
  .add('Required', () => <Question isRequired />)
  .add('Description', () => <Question hasDescription />)
  .add('email type', () => <Question type="email" hasDescription />);
