import * as React from 'react';
import { shallow } from 'enzyme';
import { Fieldset } from '..';

it('renders Fieldset without crashing ', () => {
  shallow(<Fieldset type="text" />);
});
