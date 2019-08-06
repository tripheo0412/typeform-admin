import React from 'react';
import { mount } from 'enzyme';
import { TabPanel } from '..';

it('Example has three link element', () => {
  const wrapper = mount(
    <TabPanel
      type="button"
      title="Image"
      label="ADD"
      handleClick={() => null}
    />
  );
  expect(wrapper.find('button')).toHaveLength(1);
});
