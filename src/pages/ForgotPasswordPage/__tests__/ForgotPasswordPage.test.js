import React from 'react';
import { shallow } from 'enzyme';
import ForgotPasswordPage from '..';
import { UserProvider } from '../../../contexts/UserContext';

it('renders ForgotPasswordPage without crashing', () => {
  const ForgotPasswordPageTest = () => (
    <UserProvider value={{ user: { isAuthenticated: false, user: {} } }}>
      <ForgotPasswordPage emailAddress="john.doe@gmail.com" />
    </UserProvider>
  );

  shallow(<ForgotPasswordPageTest />);
});
