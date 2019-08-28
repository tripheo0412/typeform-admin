import * as React from 'react';
import { shallow } from 'enzyme';
import { YesOrNo } from '..';

it('renders YesOrNo without crashing ', () => {
  shallow(<YesOrNo />);
});
