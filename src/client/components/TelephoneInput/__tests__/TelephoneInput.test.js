import * as React from 'react';
import { shallow } from 'enzyme';
import { TelephoneInput } from '..';

it('renders TelephoneInput without crashing ', () => {
  shallow(<TelephoneInput />);
});
