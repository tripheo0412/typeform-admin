// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import IconDotMenu from '..';
import DropDown from '../../DropDownMenu';

const options = [
  {
    title: 'Edit',
    handleClick: () => alert('editing'),
  },
  {
    title: 'Preview',
    handleClick: () => alert('Preview'),
  },
  {
    title: 'Result',
    handleClick: () => alert('Result'),
  },
  {
    title: 'Rename',
    handleClick: () => alert('Rename'),
  },
  {
    title: 'Deplicate',
    handleClick: () => alert('Deplicate'),
  },
  {
    title: 'Delete',
    handleClick: () => alert('Delete'),
  },
];

storiesOf('IconDotMenu with children', module)
  .addDecorator(jsxDecorator)
  .add('DropDown direct left', () => (
    <div style={{ marginLeft: '10rem', marginTop: '2rem' }}>
      <IconDotMenu direct="left">
        <DropDown options={options} />
      </IconDotMenu>
    </div>
  ))
  .add('DropDown direct right', () => (
    <div style={{ marginLeft: '10rem', marginTop: '2rem' }}>
      <IconDotMenu direct="right">
        <DropDown options={options} />
      </IconDotMenu>
    </div>
  ));
