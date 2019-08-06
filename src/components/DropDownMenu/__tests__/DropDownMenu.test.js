import React from 'react';
import { mount } from 'enzyme';
import { DropDown } from '..';

describe('DropDown menu', () => {
  it('should render one span element', () => {
    const wrapper = mount(
      <DropDown
        options={[
          {
            title: 'Preview',
            handleClick: () => alert('Preview'),
          },
        ]}
      />
    );
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('should render three span elements', () => {
    const wrapper = mount(
      <DropDown
        options={[
          {
            title: 'Edit',
            handleClick: () => alert('Edit'),
          },
          {
            title: 'Preview',
            handleClick: () => alert('Preview'),
          },
          {
            title: 'Delete',
            handleClick: () => alert('Delete'),
          },
        ]}
      />
    );
    expect(wrapper.find('span')).toHaveLength(3);
  });
});
