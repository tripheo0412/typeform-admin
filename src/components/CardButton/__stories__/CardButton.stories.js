// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { CardButton, AddNewCardButton } from '../index.js';

storiesOf('CardButton', module)
  .addDecorator(jsxDecorator)

  .add('Add new template card button', () => (
    <AddNewCardButton isTemplate handleClick={() => {}} />
  ))

  .add('Template card with 1 response', () => (
    <CardButton
      isTemplate
      history={{ push: () => {} }}
      templateService={{ remove: () => {} }}
      link="/"
      template={{
        id: 1,
        name: 'My Template',
        forms: [{ responses: [[]] }],
      }}
      handleClick={() => {}}
    />
  ))

  .add('Template card with no responses', () => (
    <CardButton
      isTemplate
      history={{ push: () => {} }}
      templateService={{ remove: () => {} }}
      link="/"
      template={{ id: 2, name: 'My Template', forms: [{ responses: [] }] }}
      handleClick={() => alert('Clicked')}
    />
  ))

  .add('Add new theme card button', () => (
    <AddNewCardButton handleClick={() => {}} />
  ))

  .add('Theme card with background image', () => (
    <CardButton
      link="/"
      theme={{
        buttonColor: 'blue',
        backgroundImage:
          'url(https://sample-videos.com/img/Sample-jpg-image-500kb.jpg)',
        name: 'School Bell',

        questionColor: '#3D3D3D',
        answerColor: '#4FB0AE',
      }}
      handleClick={() => {}}
    />
  ))

  .add('Theme card with background color', () => (
    <CardButton
      link="/"
      theme={{
        buttonColor: 'red',
        backgroundColor: 'green',
        name: 'School Bell',
        questionColor: '#3D3D3D',
        answerColor: '#4FB0AE',
      }}
      handleClick={() => {}}
    />
  ))

  .add('Theme card with default values', () => (
    <CardButton
      link="/"
      theme={{
        name: 'Default Theme',
        backgroundColor: '#fff',
        questionColor: '#3D3D3D',
        answerColor: '#4FB0AE',
        buttonColor: '#4FB0AE',
      }}
      handleClick={() => {}}
    />
  ));
