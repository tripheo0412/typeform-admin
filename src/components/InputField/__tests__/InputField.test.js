import React from 'react';

import { shallow, mount } from 'enzyme';

import { InputField } from '..';

describe('InputField', () => {
  let wrapper;

  const props = {
    id: 1,
    type: 'email',
    placeholder: 'Your Email',
    isSignin: 'false',
    handleChange: () => {},
  };

  it('InputField should render correctly', () => {
    wrapper = shallow(<InputField {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('InputField should render correctly type prop', () => {
    wrapper = mount(<InputField {...props} />);
    expect(wrapper.props().type).toBe('email');
  });
  it('InputField variant prop should be inputField--primary by default', () => {
    wrapper = mount(<InputField {...props} />);
    expect(wrapper.props().variant).toBe('inputField--primary');
  });
  it('InputField isSignin prop should be false by default', () => {
    wrapper = mount(<InputField {...props} />);
    expect(wrapper.props().isSignin).toBe('false');
  });
  it('InputField onChange function should be called', () => {
    const mockFunc = jest.fn();
    wrapper = mount(<InputField {...props} handleChange={mockFunc} />);
    wrapper.find('input').simulate('change');
    expect(mockFunc).toHaveBeenCalled();
  });
});
