import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { TabPanel } from '..';
import { ThemeProvider } from '../../../contexts/ThemeContext';

const styles = {
  padding: '20px',
  maxWidth: '500px',
};

const Wrapper = ({ children }: React.Node) => (
  <ThemeProvider>
    <div style={styles}>{children}</div>
  </ThemeProvider>
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
  ))
  .add('color picker tab', () => (
    <Wrapper>
      <TabPanel
        type="color"
        title="Question"
        color="#ff00ff"
        handleClick={() => null}
      />
    </Wrapper>
  ));
