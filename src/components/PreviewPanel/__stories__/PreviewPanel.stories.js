// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import PreviewPanel from '..';

const questions = [
  {
    isRequired: false,
    _id: '5d4d5c0ac21ff700072ad860',
    questionType: 'fieldset',
    variant: 'email',
    title: 'What is your Email?',
    order: 1,
    choices: [],
  },
  {
    isRequired: false,
    _id: '5d4d5c0ac21ff700072ad860',
    questionType: 'tel',
    variant: '',
    title: 'What is your number?',
    order: 2,
    choices: [],
  },
  {
    isRequired: false,
    _id: '5d4d5c0ac21ff700072ad860',
    questionType: 'fieldset',
    variant: 'shottext',
    title: 'Short text?',
    order: 3,
    choices: [],
  },
  {
    isRequired: false,
    _id: '5d4d5c0ac21ff700072ad860',
    questionType: 'fieldset',
    variant: 'longtext',
    title: 'Long text',
    order: 4,
    choices: [],
  },
  {
    isRequired: false,
    _id: '5d4d5c0ac21ff700072ad860',
    questionType: 'yesorno',
    variant: '',
    title: 'Yes Or No?',
    order: 5,
    choices: [],
  },
  {
    isRequired: false,
    _id: '5d4d5c0ac21ff700072ad860',
    questionType: 'fieldset',
    variant: 'date',
    title: 'Date',
    order: 6,
    choices: [],
  },
  {
    isRequired: false,
    _id: '5d4d5c0ac21ff700072ad860',
    questionType: 'choicebox',
    variant: '',
    title: 'Choice Box',
    order: 7,
    choices: ['React', 'Redux', 'Javascript'],
  },
  {
    isRequired: false,
    _id: '5d4d5c0ac21ff700072ad860',
    questionType: 'picture',
    variant: '',
    title: 'Picture choice',
    order: 8,
    choices: [
      {
        text: 'pic 1',
        value: 'https://images.typeform.com/images/fegzN68s2EZg/image/default',
      },
      {
        text: 'pic 2',
        value: 'https://images.typeform.com/images/fegzN68s2EZg/image/default',
      },
    ],
  },
  {
    isRequired: false,
    _id: '5d4d5c0ac21ff700072ad860',
    questionType: 'dropdown',
    variant: '',
    title: 'Drop Down',
    order: 9,
    choices: [
      'option 1',
      'option 2',
      'option 3',
      'select 1',
      'select 2',
      'select 3',
    ],
  },
  {
    isRequired: false,
    _id: '5d4d5c0ac21ff700072ad860',
    questionType: 'opinion',
    variant: '',
    title: 'Opinion scale',
    order: 10,
    choices: [],
  },
  {
    isRequired: false,
    _id: '5d4d5c0ac21ff700072ad860',
    questionType: 'rates',
    variant: '',
    title: 'rates',
    steps: 5,
    order: 11,
    choices: [],
  },
  {
    isRequired: false,
    _id: '5d4d5c0ac21ff700072ad860',
    questionType: 'upload',
    variant: '',
    title: 'File upload',
    order: 12,
    choices: [],
  },
  {
    isRequired: false,
    _id: '5d4d5c0ac21ff700072ad860',
    questionType: 'fieldset',
    variant: 'website',
    title: 'Website',
    order: 13,
    choices: [],
  },
];

export const template = {
  name: 'test',
  questions,
};

export const theme = {
  isPublic: true,
  font: 'Open Sans',
  questionColor: '#4FB0AE',
  answerColor: '#4FB0AE',
  buttonColor: '#4FB0AE',
  backgroundColor: '#ff4d4d',
  _id: '1',
  name: 'Theme Public 1',
  createdAt: '2019-07-25T09:02:07.982Z',
  updatedAt: '2019-07-25T09:02:07.982Z',
};

storiesOf('PreviewPanel', module)
  .addDecorator(jsxDecorator)
  .add('default', () => (
    <PreviewPanel className="preview" template={template} theme={theme} />
  ));
