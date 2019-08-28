import * as React from 'react';
import { shallow } from 'enzyme';
import { QuestionLabel } from '..';

it('renders Questions without crashing ', () => {
  shallow(<QuestionLabel />);
});
