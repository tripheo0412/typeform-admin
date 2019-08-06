// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import InputField from '..';

export const inputProps = {
  id: 'email',
  labelText: 'Email',
  type: 'email',
  placeholder: 'Your Email',
  value: '',
  variant: 'primary',
  isSignin: false,
};

storiesOf('InputField', module)
  .addDecorator(jsxDecorator)
  .add('primary', () => <InputField {...inputProps} handleChange={() => {}} />)
  .add('dialog', () => (
    <InputField
      {...inputProps}
      variant="dialog"
      placeholder=""
      labelText=""
      handleChange={() => {}}
    />
  ))
  .add('template', () => (
    <InputField
      {...inputProps}
      variant="template"
      placeholder=""
      labelText=""
      handleChange={() => {}}
    />
  ))
  .add('search', () => (
    <InputField
      {...inputProps}
      variant="search"
      placeholder=""
      labelText=""
      handleChange={() => {}}
    />
  ))
  .add('password', () => (
    <InputField
      {...inputProps}
      type="password"
      variant="primary"
      placeholder="Your password"
      labelText="Password"
      isSignin
      handleChange={() => {}}
    />
  ));
