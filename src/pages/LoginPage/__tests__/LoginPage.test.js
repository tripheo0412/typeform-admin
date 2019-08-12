import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '..';
import { UserProvider } from '../../../contexts/UserContext';

it('renders LoginPage without crashing', () => {
  const LoginPageTest = () => (
    <UserProvider value={{ user: { isAuthenticated: false, user: {} } }}>
      <LoginPage location={{ state: { from: { pathname: '/test' } } }} />
    </UserProvider>
  );

  shallow(<LoginPageTest />);
});
