import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '..';

describe('navbar component', () => {
  let component;
  it('debug', () => {
    const logo = {
      src: '',
      alt: 'my logo',
    };

    const avatar = {
      src: '',
      alt: 'my logo',
    };

    const settings = [
      {
        title: 'Settings',
        handleClick: () => alert('Settings'),
      },
      {
        title: 'Account',
        handleClick: () => alert('Accout'),
      },
      {
        title: 'Your Profile',
        handleClick: () => alert('Profile'),
      },
    ];

    component = shallow(
      <Navbar logo={logo} avatar={avatar} settings={settings} />
    );
    expect(component).toMatchSnapshot();
  });
});
