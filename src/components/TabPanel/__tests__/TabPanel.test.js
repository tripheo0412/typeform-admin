import React from 'react';
import { mount } from 'enzyme';
import { TabPanel } from '..';
import { ThemeProvider } from '../../../contexts/ThemeContext';

it('Example has three link element', () => {
  const TabPanelTest = () => (
    <ThemeProvider value={{ isDark: false, switchTheme: () => {} }}>
      <TabPanel
        type="button"
        title="Image"
        label="ADD"
        handleClick={() => {}}
      />
    </ThemeProvider>
  );
  const wrapper = mount(<TabPanelTest />);
  expect(wrapper.find('button')).toHaveLength(1);
});
