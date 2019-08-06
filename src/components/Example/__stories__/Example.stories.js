import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { jsxDecorator } from 'storybook-addon-jsx';

import { Button, Welcome } from '@storybook/react/demo';
import Example from '..';

storiesOf('Welcome', module)
  .addDecorator(jsxDecorator)
  .add('default', () => <Example />)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
  .add('Button with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('Button with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
