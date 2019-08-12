import React from 'react';
import { storiesOf } from '@storybook/react';
import QuestionSetting from '..';
import TabPanel from '../../TabPanel';
import { ThemeProvider } from '../../../contexts/ThemeContext';

const options = [
  {
    value: 'volvo',
    title: 'Volvo',
  },
  {
    value: 'nissan',
    title: 'Nissan',
  },
];

const styles = {
  padding: '20px',
  maxWidth: '500px',
};

const Wrapper = ({ children }: React.Node) => (
  <ThemeProvider value={{ isDark: false, switchTheme: () => {} }}>
    <div style={styles}>{children}</div>{' '}
  </ThemeProvider>
);

storiesOf('Question Setting', module)
  .add('default', () => (
    <Wrapper>
      <QuestionSetting>
        <TabPanel type="control" title="Description" handleClick={() => null} />
        <TabPanel
          type="button"
          title="Image"
          label="ADD"
          handleClick={() => alert('its video')}
        />
        <TabPanel
          type="button"
          title="Video URL"
          label="ADD"
          handleClick={() => alert('its video')}
        />
      </QuestionSetting>
    </Wrapper>
  ))
  .add('whith select type', () => (
    <Wrapper>
      <QuestionSetting>
        <TabPanel type="control" title="Description" handleClick={() => null} />
        <TabPanel
          type="button"
          title="Image"
          label="ADD"
          handleClick={() => alert('its video')}
        />
        <TabPanel
          type="button"
          title="Video URL"
          label="ADD"
          handleClick={() => alert('its video')}
        />
        <TabPanel
          type="select"
          title="Cars"
          options={options}
          handleClick={() => alert('its video')}
        />
      </QuestionSetting>
    </Wrapper>
  ));
