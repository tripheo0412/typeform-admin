/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconDotMenu from '../IconDotMenu';
import Button from '../Button';
import Avatar from '../Avatar';
import { DropDown } from '../DropDownMenu';

import './styles.scss';

type Props = {
  match: Object,
  location: Object,
  history: Object,
  user: Object,
  handleSave?: () => void,
  handleView?: () => void,
};

export const Navbar = ({
  match,
  location,
  history,
  user,
  handleSave,
  handleView,
}: Props) => {
  const [isWorkspace, setIsWorkspace] = useState(match.path === '/workspaces');
  const [workspaceItem, setWorkspaceItem] = useState({ name: '', _id: '' });
  const [templateItem, setTemplateItem] = useState({ name: '', _id: '' });

  useEffect(() => {
    setIsWorkspace(match.path === '/workspaces');
    if (location.state) {
      setWorkspaceItem(location.state.workspace || { name: '', _id: '' });
      setTemplateItem(location.state.template);
    }
  }, [match.path]);

  const links = [
    {
      title: 'edit',
      handleClick: () => {
        history.push('edit');
      },
    },
    {
      title: 'forms',
      handleClick: () => {
        history.push('forms');
      },
    },
  ];

  const navLinksTarget = links.map(link => (
    <li key={link.title}>
      <Link
        to={link.title}
        className={match.params.link === link.title ? 'a-active' : ''}
      >
        {link.title}
      </Link>
    </li>
  ));

  const workspace = () => (
    <div className="navbar navbar__workspace">
      <div className="navbar__left--logo">
        <Link to="">LOGO</Link>
      </div>

      <Avatar withMenu initialName={user.fname.charAt(0)} />
    </div>
  );

  return (
    (isWorkspace && workspace()) || (
      <div className="navbar">
        <div className="navbar__left">
          <div className="navbar__left--desktop">
            <div className="navbar__left--logo">
              <Link to="">LOGO</Link>
            </div>
            <Link
              className="navbar__left--title"
              to={`/workspaces/${workspaceItem._id}`}
            >
              {workspaceItem.name && `${workspaceItem.name}/ `}
            </Link>
            <span className="template--name">{templateItem.name}</span>
          </div>
          <div className="navbar__left--mobile">
            <button
              onClick={() => {
                history.goBack();
              }}
              type="submit"
            ></button>
            {templateItem.name}
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
          <Avatar withMenu initialName={user.fname.charAt(0)} />
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
