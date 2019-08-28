import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import DesignPanel from '..';

storiesOf('Design Panel', module)
  .addDecorator(jsxDecorator)
  .add('design panel', () => (
    <DesignPanel
      currentTheme={{
        backgroundColor: '#f0b30a',
        backgroundImage: '',
        questionColor: '#3D3D3D',
        answerColor: '#54491e',
        buttonColor: '#54491e',
      }}
      setCurrentTheme={() => {}}
    />
  ));
