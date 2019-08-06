import React from 'react';

import { shallow, mount } from 'enzyme';

import { Toolbar } from '..';

describe('Toolbar', () => {
  let wrapper;
  it('Toolbar should render correctly', () => {
    wrapper = shallow(<Toolbar />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Toolbar should render correctly the theme variant', () => {
    wrapper = mount(<Toolbar variant="theme" />);
    expect(wrapper.find('.container--theme')).toHaveLength(1);
  });
  it('Toolbar variant prop should be main by default', () => {
    wrapper = mount(<Toolbar />);
    expect(wrapper.props().variant).toBe('main');
    expect(wrapper).toMatchSnapshot();
  });
});
