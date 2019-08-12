import React from 'react';
import { shallow } from 'enzyme';
import { DataProvider } from '../../../contexts/DataContext';
import WorkspacePage from '..';

const initialState = {
  workspaces: [
    {
      _id: 1,
      adminIds: [1],
      collaborators: [1],
      templates: [1],
      name: 'Workspace 1',
      createdAt: '2019-07-25T08:42:21.961Z',
      updatedAt: '2019-07-25T08:42:21.961Z',
    },
    {
      _id: 2,
      adminIds: [1],
      collaborators: [1],
      templates: [2],
      name: 'Workspace 2',
      createdAt: '2019-07-25T08:42:21.961Z',
      updatedAt: '2019-07-25T08:42:21.961Z',
    },
  ],
  templates: [],
  forms: [],
  themes: {
    public: [],
    private: [],
  },
};

it('renders Workspace page correctly', () => {
  shallow(
    <DataProvider value={{ data: initialState }}>
      <WorkspacePage />
    </DataProvider>
  );
});
