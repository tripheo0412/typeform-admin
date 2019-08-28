// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { QuestionLabel } from '..';

const styles = {
  height: '840px',
  paddingLeft: '70px',
  paddingRight: '70px',
  paddingTop: '24px',
  paddingBottom: '24px',
  margin: '0 auto',
};
const Wrapper = ({ children }: { children: React.Node }) => (
  <div style={styles}>{children}</div>
);

storiesOf('QuestionLabel', module)
  .addDecorator(jsxDecorator)
  .add('Question label', () => (
    <Wrapper>
      <QuestionLabel
        counter={1}
        label="This is a simple question label"
      ></QuestionLabel>
    </Wrapper>
  ));
