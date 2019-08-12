import React from 'react';
import { shallow } from 'enzyme';
import ResetPasswordPage from '..';

it('renders ResetPasswordPage without crashing', () => {
  const ResetPasswordPageTest = () => <ResetPasswordPage />;
  shallow(<ResetPasswordPageTest />);
});
