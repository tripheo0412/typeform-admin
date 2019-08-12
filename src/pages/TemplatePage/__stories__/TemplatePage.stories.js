import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from '../../../contexts/ThemeContext';
import TemplatePage from '..';

storiesOf('TemplatePage', module)
  .addDecorator(jsxDecorator)
  .add('default', () => (
    <ThemeProvider>
      <TemplatePage />
    </ThemeProvider>
  ));
