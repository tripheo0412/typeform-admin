import * as React from 'react';
import { shallow } from 'enzyme';
import PreviewPanel from '..';
import { template, theme } from '../__stories__/PreviewPanel.stories';

it('renders PictureChoice without crashing ', () => {
  shallow(<PreviewPanel template={template} theme={theme} />);
});
