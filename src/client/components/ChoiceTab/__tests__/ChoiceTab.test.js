import * as React from 'react';
import { shallow } from 'enzyme';
import { ChoiceTab } from '..';

it('renders Questions without crashing ', () => {
  shallow(<ChoiceTab />);
});
