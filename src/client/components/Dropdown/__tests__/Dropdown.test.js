import * as React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from '..';

it('renders Dropdown without crashing ', () => {
  shallow(
    <Dropdown options={['option 1', 'option 2', 'select 2', 'select 3']} />
  );
});
