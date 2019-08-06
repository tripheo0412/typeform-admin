import React from 'react';
import { mount } from 'enzyme';

import { Button } from '..';

describe('button component', () => {
  let component;

  it('should pass props label', () => {
    component = mount(<Button label="Save" />);

    expect(component.props().label).toEqual('Save');
  });

  it('should pass props variant', () => {
    component = mount(<Button label="Save" variant="primary" />);

    expect(component.props().variant).toEqual('primary');
  });
});
