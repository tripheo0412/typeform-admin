/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */
import React, {
  Fragment,
  useState,
  useContext,
  useRef,
  useEffect,
} from 'react';
import { Route } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Navbar from '../../components/Navbar';
import Toolbar from '../../components/Toolbar';
import Avatar from '../../components/Avatar';
import AddUser from '../../components/AddQuestion';
import IconDotMenu from '../../components/IconDotMenu';
import DropDownMenu from '../../components/DropDownMenu';
import { AddNewCardButton } from '../../components/CardButton';
import { DataContext } from '../../contexts/DataContext.js';

import './styles.scss';

const cookies = new Cookies();
type workspacePageProps = {
  history: Object,
};

type workspaceProps = {
  match: Object,
};

const Workspace = ({ match }: workspaceProps) => {
  const { data } = useContext(DataContext);
  const titleEl = useRef(null);
  const [workspaceData, setWorkspaceData] = useState({});
  const [title, setTitle] = useState({ isEdit: false, value: 'My workspace' });

  useEffect(() => {
    const fetchWorkspaceData = () => {
      setWorkspaceData(
        data.workspaces.filter(
          workspace => workspace._id === Number(match.params.id)
        )[0]
      );
    };
    fetchWorkspaceData();
  }, [data.workspaces, match.params.id]);

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
    <div className="workspace__list">
      <button
        className="workspace__button--title"
        type="button"
        onClick={handleTitleClick}
      >
        {
          <span
            ref={titleEl}
            role="textbox"
            onChange={handleTitleChange}
            onKeyPress={handleTitleKeyPress}
            value={title.value}
            className="workspace__title"
            contentEditable={title.isEdit}
          >
            {workspaceData.name}
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
        <AddNewCardButton handleClick={() => {}} />
      </div>
    </div>
  );
};

const WorkspacesPage = ({ history }: workspacePageProps) => {
  const { data } = useContext(DataContext);
  console.log(cookies.get('refresh_token'));
  // useEffect(() => {
  //   workspaceService.getAll();
  // }, []);
  const handleWorkspaceClick = workspaceId => {
    history.push(`/workspaces/${workspaceId}`);
  };
  return (
    <Fragment>
      <Navbar isWorkspase />
      <div className="workspace__container">
        <Toolbar
          handleWorkspaceClick={handleWorkspaceClick}
          workspaces={data.workspaces.map(workspace => ({
            _id: workspace._id,
            templates: workspace.templates.length,
            name: workspace.name,
          }))}
        >
          <Route path="/workspaces/:id" component={Workspace} />
        </Toolbar>
      </div>
    </Fragment>
  );
};

export default WorkspacesPage;
