// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Theme, Template } from '../index.js';

storiesOf('CardButton', module)
  .addDecorator(jsxDecorator)
  .add('New Template Template Component', () => (
    <Template tempClick={() => {}} />
  ))
  .add('Has responses Theme Component', () => (
    <Theme themeTitle="My Template" responses={4} link="/" />
  ))
  .add('Has not any responses Theme Component', () => (
    <Theme themeTitle="My theme" responses={0} link="/" />
  ))
  .add('Theme with background image Theme Component', () => (
    <Theme
      link="/"
      isSample
      themeName="School Bell"
      textColor="blue"
      themeBackImg="url(https://sample-videos.com/img/Sample-jpg-image-500kb.jpg)"
    />
  ))
  .add('Theme with background color', () => (
    <Theme
      link="/"
      isSample
      themeName="School Bell"
      textColor="red"
      themeBackColor="green"
    />
  ))
  .add('Theme whith default colors', () => (
    <Theme link="/" isSample themeName="Default Theme" />
  ));
