import React from 'react';
import { mount } from 'enzyme';
import Example from '..';

test('Example has h1 element', () => {
  const wrapper = mount(<Example />);
  expect(wrapper.find('h1')).toHaveLength(1);
});
