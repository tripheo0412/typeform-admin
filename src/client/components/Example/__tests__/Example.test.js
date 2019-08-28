import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import { Example } from '..';

configure({ adapter: new Adapter() });

test('Example has h1 element', () => {
  const wrapper = mount(<Example />);
  expect(wrapper.find('h1')).toHaveLength(1);
});
