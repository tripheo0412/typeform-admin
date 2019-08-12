import * as React from 'react';
import { mount } from 'enzyme';
import { Avatar } from '../index';
import { UserProvider } from '../../../contexts/UserContext';
import { ThemeProvider } from '../../../contexts/ThemeContext';

describe('Avatar component', () => {
  test('The main Class exists', () => {
    const wrapper = mount(
      <UserProvider value={{ user: { isAuthenticated: false, user: {} } }}>
        <ThemeProvider value={{ isDark: false, switchTheme: () => {} }}>
          <Avatar />
        </ThemeProvider>
      </UserProvider>
    );
    expect(wrapper.find('.avatar')).toHaveLength(1);
  });
});
