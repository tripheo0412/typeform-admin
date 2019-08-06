import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { AddQuestion } from '..';

const styles = {
  padding: '20px',
  width: '500px',
};
const Wrapper = ({ children }: React.Node) => (
  <div style={styles}>{children}</div>
);

storiesOf('Add Question', module)
  .addDecorator(jsxDecorator)
  .add('default', () => (
    <Wrapper>
      <AddQuestion />
    </Wrapper>
  ))
  .add('New Question', () => (
    <Wrapper>
      <AddQuestion label="Add New Question" />
    </Wrapper>
  ));
