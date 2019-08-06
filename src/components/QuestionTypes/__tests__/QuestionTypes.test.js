import React from 'react';
import { mount } from 'enzyme';
import { QuestionTypes } from '..';

describe('QuestionTypes Component', () => {
  it('should render 12 element', () => {
    const wrapper = mount(<QuestionTypes />);
    expect(wrapper.find('span')).toHaveLength(13);
  });
});
