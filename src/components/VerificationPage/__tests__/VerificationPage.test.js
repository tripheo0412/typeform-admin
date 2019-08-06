import React from 'react';
import { shallow } from 'enzyme';
import VerificationPage from '..';
import { UserProvider } from '../../../contexts/UserContext';

it('renders LoginPage without crashing', () => {
  const VerificationPageTest = () => (
    <UserProvider value={{ user: { isAuthenticated: false, user: {} } }}>
      <VerificationPage emailAddress="asas@yahoo.com" />
    </UserProvider>
  );
  shallow(<VerificationPageTest />);
});
