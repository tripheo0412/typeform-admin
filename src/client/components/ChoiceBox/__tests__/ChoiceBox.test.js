import * as React from 'react';
import { shallow } from 'enzyme';
import { ChoiceBox } from '..';

it('renders ChoiceBox without crashing ', () => {
  shallow(<ChoiceBox choices={['React', 'Redux', 'HTML', 'CSS', 'Flow']} />);
});
