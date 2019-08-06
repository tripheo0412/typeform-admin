import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { TabPanel } from '..';

const styles = {
  padding: '20px',
  maxWidth: '500px',
};

const Wrapper = ({ children }: React.Node) => (
  <div style={styles}>{children}</div>
);

storiesOf('Tab Panel', module)
  .addDecorator(jsxDecorator)
  .add('default tab', () => (
    <Wrapper>
      <TabPanel
        type="button"
        title="Image"
        label="ADD"
        handleClick={() => null}
      />
    </Wrapper>
  ))
  .add('radio control tab', () => (
    <Wrapper>
      <TabPanel type="control" title="Image" handleClick={() => null} />
    </Wrapper>
  ));
