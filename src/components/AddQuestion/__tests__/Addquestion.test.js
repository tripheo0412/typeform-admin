import React from 'react';

import { mount, shallow } from 'enzyme';

import { AddQuestion } from '..';

describe('test AddQuestion component', () => {
  it('Example has h1 element', () => {
    const wrapper = mount(<AddQuestion />);
    expect(wrapper.find('.add__button')).toHaveLength(1);
  });
  it('Test click event on clickable element', () => {
    const mockCallBack = jest.fn();

    const Wrapper = shallow(<AddQuestion handleToggle={mockCallBack} />);
    Wrapper.find('.add__question__items').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
