import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ProgressBar from '..';

configure({ adapter: new Adapter() });
describe('ProgressBar Test', () => {
  it('renders ProgressBar', () => {
    shallow(<ProgressBar />);
  });
});
