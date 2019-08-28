import React from 'react';
import { shallow } from 'enzyme';
import Template from '..';
import { DataProvider } from '../../../contexts/DataContext';

it('renders Workspace page correctly', () => {
  shallow(
    <DataProvider>
      <Template />
    </DataProvider>
  );
});
