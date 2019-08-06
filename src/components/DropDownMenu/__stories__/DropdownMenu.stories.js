// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { DropDown } from '../index.js';

const options = [
  {
    title: 'edit',
    handleClick: () => alert('editing'),
  },
  {
    title: 'preview',
    handleClick: () => alert('Preview'),
  },
  {
    title: 'result',
    handleClick: () => alert('Result'),
  },
  {
    title: 'rename',
    handleClick: () => alert('Rename'),
  },
  {
    title: 'deplicate',
    handleClick: () => alert('Deplicate'),
  },
  {
    title: 'delete',
    handleClick: () => alert('Delete'),
  },
];

storiesOf('DropDown menu', module).add('Dropdown', () => (
  <DropDown options={options}></DropDown>
));
