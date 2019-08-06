// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import Button from '..';

const sayHi = value => {
  alert(value);
};

storiesOf('Button', module)
  .addDecorator(jsxDecorator)
  .add('variant', () => (
    <div style={{ marginLeft: '1rem' }}>
      <p>Primary</p>
      <Button
        variant="primary"
        size="sm"
        label="Save"
        onClick={() => sayHi('Hi')}
      />
      <p>Secondary</p>
      <Button variant="secondary" size="sm" label="View" onClick={() => {}} />
      <p>Outline</p>
      <Button variant="outline" size="sm" label="Sign up" onClick={() => {}} />
      <p>Duplicate</p>
      <Button
        variant="duplicate"
        size="sm"
        label="Duplicate"
        onClick={() => {}}
      />
      <p>Danger</p>
      <Button variant="danger" size="sm" label="Delete" onClick={() => {}} />
    </div>
  ))
  .add('sizes', () => (
    <div style={{ marginLeft: '1rem' }}>
      <p>sm</p>
      <Button
        variant="primary"
        size="sm"
        label="Save"
        onClick={() => sayHi('Hi')}
      />
      <p>md</p>
      <Button variant="danger" size="md" label="View" onClick={() => {}} />
      <p>lg</p>
      <Button variant="primary" size="lg" label="Login" onClick={() => {}} />
      &nbsp;
      <Button
        variant="primary"
        size="lg"
        label="Create my account"
        onClick={() => {}}
      />
    </div>
  ))
  .add('disabled', () => (
    <div style={{ marginLeft: '1rem' }}>
      <p>disabled</p>
      <Button
        variant="primary"
        size="md"
        label="Save"
        disabled
        onClick={() => sayHi('Hi')}
      />
    </div>
  ));
