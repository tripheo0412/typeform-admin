import * as React from 'react';
import { shallow } from 'enzyme';
import { Rates } from '..';

it('renders Rates without crashing ', () => {
  shallow(<Rates steps={5} />);
});
