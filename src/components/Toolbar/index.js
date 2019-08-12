/* eslint-disable react/prop-types */
// @flow
import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import PopUp from '../PopUp/index.js';
import Overlay from '../Overlay/index.js';
import pen from './assets/pen.svg';
import theme from './assets/theme.svg';
import alert from './assets/alert.svg';
import dashboard from './assets/dashboard.svg';
import plus from './assets/plus.svg';
import zoom from './assets/zoom.svg';
import './styles.scss';

type Variant = 'main' | 'theme';

type Props = {
  variant?: Variant,
  children?: React.Node,
  workspaces?: Array<Object>,
  handleWorkspaceClick: any => void,
};

type ThemeProps = {
  children?: React.Node,
};

type SideToolbarProps = {
  isShow?: boolean,
  workspaces?: Array<Object>,
  handleSearchClick?: () => void,
  handlePlusClick?: () => void,
  handleWorkspaceClick: any => void,
};

const Theme = ({ children }: ThemeProps) => {
  const [component, setComponent] = React.useState('question');
  const [questionComp, themeComp, notiComp] = React.Children.toArray(children);
  let comp;
  switch (component) {
    case 'question':
      comp = questionComp;
      break;
    case 'theme':
      comp = themeComp;
      break;
    case 'noti':
      comp = notiComp;
      break;
    default:
      comp = questionComp;
      break;
  }
  return (
    <React.Fragment>
      <div className="toolbar--theme">
        <div className="container--theme">
          <button
            type="button"
            className="button__icon"
            onClick={() => setComponent('question')}
          >
            <img src={pen} alt="pen icon" />
          </button>
          <button
            type="button"
            className="button__icon"
            onClick={() => setComponent('theme')}
          >
            <img src={theme} alt="theme icon" />
          </button>
          <button
            type="button"
            className="button__icon"
            onClick={() => setComponent('noti')}
          >
            <img src={alert} alt=" alert icon" />
          </button>
        </div>
        {comp}
      </div>
    </React.Fragment>
  );
};

export const Toolbar = ({
  variant,
  children,
  workspaces,
  handleWorkspaceClick,
}: Props) => {
  const [showSideToolbar, setShowSideToolbar] = React.useState(false);
  const [showCreateDialog, setShowCreateDialog] = React.useState(false);
  const [showSearchDialog, setShowSearchDialog] = React.useState(false);
  const handleShowCreateDialog = () => {
    setShowCreateDialog(true);
  };
  const handleShowSearchDialog = () => {
    setShowSearchDialog(true);
  };
  const handleShowSideToolbar = () => {
    setShowSideToolbar(!showSideToolbar);
  };
  const wrapperStyles = classNames({
    wrapper__toolbar: true,
    'wrapper__toolbar--mobile': showSideToolbar,
  });
  const topToolbarStyles = classNames({
    header: true,
    'header--top': true,
    'header--hide': showSideToolbar,
  });

  const containerTopStyles = classNames({
    'container--top': true,
    'container--top--show': showSideToolbar,
  });
  return (
    <React.Fragment>
      {variant === 'main' ? (
        <React.Fragment>
          <div className={wrapperStyles}>
            <SideToolbar
              handleWorkspaceClick={handleWorkspaceClick}
              handlePlusClick={handleShowCreateDialog}
              handleSearchClick={handleShowSearchDialog}
              workspaces={workspaces}
              isShow={showSideToolbar}
            />
            <div className={containerTopStyles}>
              {showSideToolbar && (
                <Overlay
                  isSidebar
                  handleClick={() => setShowSideToolbar(false)}
                />
              )}
              <div className={topToolbarStyles}>
                <button
                  type="button"
                  className="button__icon button__icon--mobile"
                  onClick={handleShowSideToolbar}
                >
                  <img src={dashboard} alt="dashboad icon" />
                </button>
                <span>Workspaces</span>
                <div className="header__button">
                  <button
                    type="button"
                    className="button__icon button__icon--top"
                    title="Create Workspace"
                    onClick={handleShowCreateDialog}
                  >
                    <img className="svg" src={plus} alt="plus icon" />
                  </button>
                  <button
                    type="button"
                    className="button__icon"
                    onClick={handleShowSearchDialog}
                  >
                    <img src={zoom} alt="zoom icon" />
                  </button>
                </div>
              </div>
              {children}
            </div>
            {showCreateDialog && (
              <React.Fragment>
                <Overlay handleClick={() => setShowCreateDialog(false)} />
                <div className="dialog">
                  <PopUp
                    title="Create a new Workspace"
                    buttonSubmit="create workspace"
                    handleSubmit={() => {}}
                    handleCancel={() => setShowCreateDialog(false)}
                  />
                </div>
              </React.Fragment>
            )}
            {showSearchDialog && (
              <React.Fragment>
                <Overlay handleClick={() => setShowSearchDialog(false)} />
                <div className="dialog">
                  <PopUp title="" isSearch handleSubmit={() => {}} />
                </div>
              </React.Fragment>
            )}
          </div>
        </React.Fragment>
      ) : (
        <Theme>{children}</Theme>
      )}
    </React.Fragment>
  );
};

const SideToolbar = ({
  isShow,
  workspaces,
  handleSearchClick,
  handlePlusClick,
  handleWorkspaceClick,
}: SideToolbarProps) => {
  const styles = classNames({
    container: true,
    'container--side': !isShow,
  });
  return (
    <div className={styles}>
      <div className="header">
        <span>Workspaces</span>
        <div className="header__button">
          <button
            type="button"
            className="button__icon"
            title="Create Workspace"
            onClick={handlePlusClick}
          >
            <img className="svg" src={plus} alt="plus icon" />
          </button>
          <button
            type="button"
            className="button__icon"
            onClick={handleSearchClick}
          >
            <img src={zoom} alt="zoom icon" />
          </button>
        </div>
      </div>
      <div className="workspaces">
        <ul className="workspaces__items">
          {workspaces
            ? workspaces.map(workspace => (
                <li
                  key={workspace._id}
                  tabIndex="0"
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                  role="button"
                  onClick={() => handleWorkspaceClick(workspace._id)}
                  onKeyPress={() => {}}
                >
                  <div className="workspaces__item">
                    <span>{workspace.name}</span>
                    <span>{workspace.templates}</span>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export const Testroute = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/theme">Theme</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact render={props => <Toolbar {...props} />} />
      <Route
        path="/theme"
        render={props => (
          <Toolbar
            {...props}
            variant={props.location.pathname === '/' ? 'main' : 'theme'}
          />
        )}
      />
    </div>
  </Router>
);

Toolbar.defaultProps = {
  variant: 'main',
};

SideToolbar.defaultProps = {
  isShow: false,
};

export default Toolbar;
