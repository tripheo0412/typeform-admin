import React from 'react';
import { mount } from 'enzyme';
import { Share } from '..';

test('Example has h1 element', () => {
  const wrapper = mount(<Share />);
  expect(wrapper.find('button')).toHaveLength(1);
});
