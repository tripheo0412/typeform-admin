// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import Question from '..';

storiesOf('Question', module)
  .addDecorator(jsxDecorator)
  .add('Default', () => (
    <div>
      <Question showQuestionSetting={() => {}} />
      <Question showQuestionSetting={() => {}} />
    </div>
  ))
  .add('Required', () => <Question showQuestionSetting={() => {}} isRequired />)
  .add('Description', () => (
    <Question showQuestionSetting={() => {}} hasDescription />
  ))
  .add('email type', () => (
    <Question type="email" showQuestionSetting={() => {}} hasDescription />
  ));
