import React from 'react';
import { shallow, mount } from 'enzyme';
import { QuestionSetting } from '..';

describe('Test Button component', () => {
  test('The main Class exists', () => {
    const wrapper = mount(<QuestionSetting />);
    expect(wrapper.find('.buttons')).toHaveLength(3);
  });
  it('Test click event on button UP', () => {
    const mockCallBack = jest.fn();

    const Wrapper = shallow(<QuestionSetting handleUp={mockCallBack} />);
    Wrapper.find('.buttons--up').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('Test click event on button DOWN', () => {
    const mockCallBack = jest.fn();

    const Wrapper = shallow(<QuestionSetting handleDown={mockCallBack} />);
    Wrapper.find('.buttons--down').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
