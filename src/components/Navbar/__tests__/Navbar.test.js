import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '..';

const tempObject = { name: 'Temp' };

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
      <Navbar
        logo={logo}
        avatar={avatar}
        settings={settings}
        history={tempObject}
        match={{ params: { link: '' } }}
        location={tempObject}
        user={{ fname: 'N' }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
