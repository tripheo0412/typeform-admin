// @flow
import React from 'react';
import IconDotMenu from '../IconDotMenu';
import Button from '../Button';
import Avatar from '../Avatar';
import { DropDown } from '../DropDownMenu';
import './styles.scss';

type Props = {
  isWorkspase?: boolean,
  templateName?: string,
  handleSave?: () => void,
  handleView?: () => void,
  handleBack?: () => void,
};

const links = [
  {
    title: 'edit',
    handleClick: () => alert('link'),
    linkUrl: '#',
  },
  {
    title: 'share',
    handleClick: () => alert('link'),
    linkUrl: '#',
  },
  {
    title: 'results',
    handleClick: () => alert('link'),
    linkUrl: '#',
  },
];
export const Navbar = ({
  templateName,
  handleSave,
  handleView,
  handleBack,
  isWorkspase,
}: Props) => {
  const navLinksTarget = links.map(link => (
    // TODO: change the a link to be <Link to="l.linkUrl"/>
    <li key={link.title}>
      <a href={link.linkUrl} target="">
        {link.title}
      </a>
    </li>
  ));

  const workspace = () => (
    <div className="navbar navbar__workspace">
      <div className="navbar__left--logo">
        <placeholder>LOGO</placeholder>
      </div>

      <Avatar
        withMenu
        initialName="vj"
        imgUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
      />
    </div>
  );

  return (
    (isWorkspase && workspace()) || (
      <div className="navbar">
        <div className="navbar__left">
          <div className="navbar__left--desktop">
            <div className="navbar__left--logo">
              <placeholder>LOGO</placeholder>
            </div>
            <a className="navbar__left--title" href="/" target="">
              my workspace
            </a>
            <span className="template--name">{templateName}</span>
          </div>
          <div className="navbar__left--mobile">
            <button onClick={handleBack} type="submit"></button>
            {templateName}
          </div>
        </div>
        <ul className="navbar__navlinks">{navLinksTarget}</ul>
        <div className="navbar__center">
          <Button
            variant="primary"
            size="sm"
            label="Save"
            onClick={handleSave}
          />
          <Button
            variant="secondary"
            size="sm"
            label="View"
            onClick={handleView}
          />
          <Avatar
            withMenu
            initialName="vj"
            imgUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          />
        </div>
        <div className="dot__menu">
          <IconDotMenu direct="left">
            <DropDown options={links} />
          </IconDotMenu>
        </div>
      </div>
    )
  );
};

Navbar.defaultProps = {
  handleSave: () => {},
  handleView: () => {},
  handleBack: () => {},
};

export default Navbar;
