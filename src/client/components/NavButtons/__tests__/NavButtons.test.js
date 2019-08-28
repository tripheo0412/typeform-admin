import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import NavButtons from '..';

configure({ adapter: new Adapter() });
describe('NavButtons Test', () => {
  it('renders NavButtons', () => {
    shallow(<NavButtons />);
  });
});
