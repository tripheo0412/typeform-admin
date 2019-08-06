import * as React from 'react';
import { mount } from 'enzyme';
import { Avatar } from '../index';

describe('Avatar component', () => {
  test('The main Class exists', () => {
    const wrapper = mount(<Avatar />);
    expect(wrapper.find('.avatar')).toHaveLength(1);
  });
});
