// @flow
import './styles.scss';

import React from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { UserContext } from '../../contexts/UserContext';
import { useOnClickOutside } from '../../custom-hooks/useOnClickOutside';
import { DropDown } from '../DropDownMenu';
import TabPanel from '../TabPanel';

type Option = Array<{
  title: string,
  handleClick: () => any,
}>;

type AvatarProps = {
  imgUrl?: string,
  initialName: string,
  withMenu?: boolean,
};
export const Avatar = ({ imgUrl, initialName, withMenu }: AvatarProps) => {
  const { switchTheme } = React.useContext(ThemeContext);

  const { userService } = React.useContext(UserContext);
  const options: Option = [
    { title: 'setting', handleClick: () => alert('setting') },
    { title: 'Account', handleClick: () => alert('Account') },
    { title: 'Your profile', handleClick: () => alert('Your profile') },
    { title: 'Log out', handleClick: () => userService.signout() },
  ];
  const [isOn, setIsOff] = React.useState(false);
  const handleToggle = (e: { target: HTMLElement }): void => {
    if (
      e.target.className === 'avatar--img' ||
      e.target.className === 'avatar--name'
    ) {
      setIsOff(!isOn);
    }
  };
  const ref = React.useRef();

  useOnClickOutside(ref, () => setIsOff(false));

  return (
    <>
      <div
        className="avatar"
        onClick={handleToggle}
        role="button"
        onKeyPress={() => {}}
        tabIndex={0}
        ref={ref}
      >
        {!imgUrl ? (
          <span className="avatar--name">{initialName}</span>
        ) : (
          <img className="avatar--img" alt="avatar" src={imgUrl} />
        )}
        {withMenu && isOn && (
          <div className="avatar--dropdown">
            <DropDown options={options}>
              <TabPanel
                type="control"
                title="Dark"
                label=""
                options={[]}
                handleClick={switchTheme}
              />
            </DropDown>
          </div>
        )}
      </div>
    </>
  );
};

export default Avatar;
