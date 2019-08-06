import React, { Fragment, useState } from 'react';
import Navbar from '../Navbar';
import Toolbar from '../Toolbar';
import Avatar from '../Avatar';
import AddUser from '../AddQuestion';
import IconDotMenu from '../IconDotMenu';
import DropDownMenu from '../DropDownMenu';
import { Template } from '../CardButton';
import './styles.scss';

const Workspace = () => {
  const [title, setTitle] = useState({ isEdit: false, value: 'My workspace' });
  const handleTitleClick = () => {
    setTitle({
      ...title,
      isEdit: true,
    });
  };
  const handleTitleChange = (event: Event) => {
    setTitle({
      ...title,
      value: event.target.value,
    });
  };
  const handleTitleKeyPress = (event: Event) => {
    if (event.key === 'Enter') {
      setTitle({
        ...title,
        isEdit: false,
      });
    }
  };

  return (
    <Fragment>
      <Navbar isWorkspase />
      <div className="workspace__container">
        <Toolbar>
          <div className="workspace__list">
            <button
              className="workspace__button--title"
              type="button"
              onClick={handleTitleClick}
            >
              {
                // eslint-disable-next-line jsx-a11y/interactive-supports-focus
                <span
                  role="textbox"
                  onChange={handleTitleChange}
                  onKeyPress={handleTitleKeyPress}
                  value={title.value}
                  className="workspace__title"
                  contentEditable={title.isEdit}
                >
                  My workspace
                </span>
              }
            </button>
            <div className="workspace__users">
              <div className="workspace__user">
                <Avatar initialName="An" />
              </div>
              <div className="workspace__user">
                <Avatar initialName="NG" />
              </div>
              <div className="workspace__user">
                <Avatar initialName="H" />
              </div>
              <AddUser label="" handleToggle={() => {}} />
              <IconDotMenu direct="right">
                <DropDownMenu
                  options={[{ title: 'Delete', handleClick: () => {} }]}
                />
              </IconDotMenu>
            </div>
            <div className="workspace__templates">
              <Template tempClick={() => {}} />
            </div>
          </div>
        </Toolbar>
      </div>
    </Fragment>
  );
};

export default Workspace;
