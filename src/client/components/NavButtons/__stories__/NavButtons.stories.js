import React from 'react';
import { storiesOf } from '@storybook/react';
import NavButtons from '..';

storiesOf('Navigation Buttons', module).add('default', () => (
  <div>
    <div style={{ height: 30, width: '100%' }}>
      <NavButtons
        color="white"
        prev={() => {
          alert('clicked');
        }}
        next={() => {
          alert('clicked');
        }}
      />
    </div>
    <div style={{ height: 60, width: '100%' }}>
      <NavButtons
        color="white"
        prev={() => {
          alert('clicked');
        }}
        next={() => {
          alert('clicked');
        }}
      />
    </div>
    <div style={{ height: 80, width: '100%' }}>
      <NavButtons
        color="white"
        prev={() => {
          alert('clicked');
        }}
        next={() => {
          alert('clicked');
        }}
      />
    </div>
  </div>
));
