// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { QuestionTypes } from '..';

// const handleType = e => console.log(e.target.title);

storiesOf('QuestionTypes', module)
  .addDecorator(jsxDecorator)
  .add('default', () => <QuestionTypes handleType={() => alert('Clicked')} />);
