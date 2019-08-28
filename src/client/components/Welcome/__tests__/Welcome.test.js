import * as React from 'react';
import { shallow } from 'enzyme';
import { Welcome } from '..';

it('renders PictureChoice without crashing ', () => {
  shallow(<Welcome text="Welcome Screen" />);
});
