import * as React from 'react';
import { shallow } from 'enzyme';
import { OpinionScale } from '..';

it('renders OpinionScale without crashing ', () => {
  shallow(<OpinionScale />);
});
