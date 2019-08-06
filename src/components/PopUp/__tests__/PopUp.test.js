import React from 'react';
import { shallow } from 'enzyme';

import PopUp from '..';

describe('popup omponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PopUp debug />);
    expect(component).toMatchSnapshot();
  });
});
