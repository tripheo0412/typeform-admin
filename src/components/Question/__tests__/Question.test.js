import React from 'react';

import { mount, shallow } from 'enzyme';

import { Question } from '..';

describe('Question', () => {
  let wrapper;
  const setQuestionText = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setQuestionText]);

  beforeEach(() => {
    wrapper = mount(<Question />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Question should render correctly', () => {
    wrapper = shallow(<Question />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Question should render correctly prop type', () => {
    wrapper = mount(<Question type="email" />);
    expect(wrapper.props().type).toBe('email');
  });
  // it('Question setQuestionText method should be called when text is changed', () => {
  //   const mockedEvent = { preventDefault() {}, target: { value: 'adcb' } };
  //   wrapper
  //     .find('textarea')
  //     .first()
  //     .simulate('change', mockedEvent);
  //   expect(setQuestionText).toHaveBeenCalled();
  // });
});
