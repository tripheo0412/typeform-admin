import React from 'react';
import { shallow } from 'enzyme';
import { Theme, Template } from '..';

describe('Card Button Test', () => {
  it('renders Theme without crashing', () => {
    shallow(<Theme />);
  });
  it('renders Template without crashing', () => {
    shallow(<Template />);
  });
  it('should render correctly default template', () => {
    const component = shallow(<Theme />);
    expect(component).toMatchSnapshot();
  });
  it('should render card text correctly with responses', () => {
    const component = shallow(<Theme responses={4} />);
    expect(component).toMatchSnapshot();
  });
  it('should render card text correctly without responses', () => {
    const component = shallow(<Theme responses={0} />);
    expect(component).toMatchSnapshot();
  });
  it('should render Question card correctly', () => {
    const component = shallow(<Theme isSample tempColor="red" />);
    expect(component).toMatchSnapshot();
  });
});
