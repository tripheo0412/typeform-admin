import React from 'react';
import { shallow } from 'enzyme';
import EmailNotification from '..';

it('renders email notification component correctly', () => {
  shallow(<EmailNotification />);
});
