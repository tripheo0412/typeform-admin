import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from '..';

it('renders Button without crashing ', () => {
  shallow(<Button handleClick={() => alert('clicked')} text="Submit" />);
});
