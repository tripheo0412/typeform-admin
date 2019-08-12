import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from '..';
import { ThemeProvider } from '../../../contexts/ThemeContext';
import { UserProvider } from '../../../contexts/UserContext';

const styles = {
  padding: '20px',
  maxWidth: '1000vh',
  display: 'flex',
  justifyContent: 'flex-end',
};

const Wrapper = ({ children }: React.Node) => (
  <UserProvider>
    <ThemeProvider>
      <div style={styles}>{children}</div>{' '}
    </ThemeProvider>
  </UserProvider>
);

storiesOf('Avatar with image', module)
  .add('default', () => (
    <Wrapper>
      <Avatar
        withMenu
        imgUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
      />
    </Wrapper>
  ))
  .add('Avatar without image', () => (
    <Wrapper>
      <Avatar initialName="mn" withMenu />
    </Wrapper>
  ))
  .add('Avatar without menu', () => (
    <Wrapper>
      <Avatar
        initialName="mn"
        imgUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
      />
    </Wrapper>
  ));
