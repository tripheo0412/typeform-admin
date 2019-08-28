/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
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
import Navbar from '../../components/Navbar';
import Toolbar from '../../components/Toolbar';
import Avatar from '../../components/Avatar';
import AddUser from '../../components/AddQuestion';
import IconDotMenu from '../../components/IconDotMenu';
import DropDownMenu from '../../components/DropDownMenu';
import { AddNewCardButton, CardButton } from '../../components/CardButton';
import './styles.scss';
import { DataContext } from '../../contexts/DataContext';
import PopUp from '../../components/PopUp';

type workspaceProps = {
  match: Object,
  history: Object,
  data: Object,
  dataService: Object,
};

const Workspace = ({ match, history, data, dataService }: workspaceProps) => {
  const [title, setTitle] = useState({ isEdit: false, value: 'My workspace' });
  const [openRenamePopup, setOpenRenamePopup] = useState(false);

  const titleEl = useRef(null);

  const workspace = data.workspaces.find(
    workspaceItem => workspaceItem._id === match.params.id // Get workspace from id in match params
  ) || {
    name: '',
    collaborators: [{ _id: '', fname: '' }],
    templatesFetched: true,
  }; // For when workspace not gotten yet or no match params id is there

  const firstWorkspace = data.workspaces[0] || { _id: '' };

  useEffect(() => {
    // Only get templates when workspace is not fetched yet
    if (!workspace.templatesFetched) {
      dataService.getWorkspaceTemplates(workspace);
    }
  }, [workspace]);

  const templates = data.templates.filter(
    template => template.workspaceId === workspace._id
  );

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

  const handleTemplateClick = template => {
    history.push(`/templates/${template._id}/edit`, { workspace, template });
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
            {workspace.name}
          </span>
        }
      </button>
      <div className="workspace__users">
        {workspace.collaborators.map(collaborator => (
          <div key={collaborator._id} className="workspace__user">
            <Avatar initialName={collaborator.fname.charAt(0)} />
          </div>
        ))}

        <AddUser label="" handleToggle={() => {}} />
        <IconDotMenu direct="right">
          <DropDownMenu
            options={[
              {
                title: 'Delete',
                handleClick: () => {
                  dataService.removeWorkspace(workspace._id);
                  history.push(`/workspaces/${firstWorkspace._id}`);
                },
              },
            ]}
          />
        </IconDotMenu>
      </div>
      <div className="workspace__templates">
        <AddNewCardButton
          isTemplate
          handleClick={() => setOpenRenamePopup(true)}
        />
        {templates.map(template => (
          <CardButton
            key={template._id}
            history={history}
            isTemplate
            template={template}
            dataService={dataService}
            handleClick={handleTemplateClick}
          ></CardButton>
        ))}
      </div>
      {openRenamePopup && (
        <PopUp
          title="Create a New Template"
          buttonSubmit="create"
          handleSubmit={name => {
            dataService.createTemplate({ name, workspaceId: workspace._id });
            setOpenRenamePopup(false);
          }}
          handleCancel={() => setOpenRenamePopup(false)}
        />
      )}
    </div>
  );
};

type workspacePageProps = {
  match: Object,
  history: Object,
  user: Object,
  location: Object,
};

const WorkspacesPage = ({
  match,
  history,
  user,
  location,
}: workspacePageProps) => {
  const { data, dataService } = useContext(DataContext);

  const firstWorkspace = data.workspaces[0] || { _id: '' };

  const handleWorkspaceClick = workspace => {
    history.push(`/workspaces/${workspace._id}`);
  };

  useEffect(() => {
    if (data.workspacesFetched) {
      const { pathname } = location;
      // Only route to first workspace if pathname does not contain id
      if (pathname === '/workspaces' || pathname === '/workspaces/') {
        history.push(`/workspaces/${firstWorkspace._id}`);
      }
    } else {
      dataService.getWorkspaces(); // Get all workspaces first then route to first workspace
    }
  }, [data.workspacesFetched]);

  return (
    <Fragment>
      <Navbar
        isWorkspace
        match={match}
        location={location}
        history={history}
        user={user}
      ></Navbar>
      <div className="workspace__container">
        <Toolbar
          handleWorkspaceClick={handleWorkspaceClick}
          workspaces={data.workspaces}
          user={user}
          dataService={dataService}
        >
          <Route
            path="/workspaces/:id"
            render={(props: any) => (
              <Workspace
                {...props}
                data={data}
                dataService={dataService}
              ></Workspace>
            )}
          />
        </Toolbar>
      </div>
    </Fragment>
  );
};

export default WorkspacesPage;
