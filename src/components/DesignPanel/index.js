// @flow
import React, { Fragment, useState, useEffect, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DataContext } from '../../contexts/DataContext';
import { AddNewCardButton, CardButton } from '../CardButton';
import { Button } from '../Button';
import ThemeCustomizeTab from '../ThemeCustomizeTab';

import './styles.scss';

type Props = {
  currentTheme: Object,
  setCurrentTheme: Object => Object,
};

const DesignPanel = ({ currentTheme, setCurrentTheme }: Props) => {
  const { data, dataService } = useContext(DataContext);
  const [activeTab, setActiveTab] = useState('public');
  const [showSaveButton, setShowSaveButton] = useState(false);

  useEffect(() => {
    if (activeTab === 'public') {
      if (!data.publicThemesFetched) {
        dataService.getPublicThemes();
      }
    }
  }, [activeTab, data.publicThemesFetched, dataService]);

  useEffect(() => {
    if (activeTab === 'private') {
      if (!data.privateThemesFetched) {
        dataService.getUserThemes();
      }
    }
  }, [activeTab, data.privateThemesFetched, dataService]);

  const handleChange = (e: { target: HTMLInputElement }) => {
    setCurrentTheme({
      ...currentTheme,
      [e.target.id]: e.target.value,
    });
    setShowSaveButton(true);
  };

  const handleCustomizeShortcut = theme => {
    setCurrentTheme(theme);
    setActiveTab('customize');
  };

  const publicThemes = data.publicThemes.map(theme => {
    const publicThemeShortcuts = [
      {
        title: 'Customize',
        handleClick: handleCustomizeShortcut,
      },
    ];
    return (
      <li className="theme__card" key={theme._id}>
        <CardButton
          dataService={dataService}
          handleClick={setCurrentTheme}
          theme={theme}
          themeShortcuts={publicThemeShortcuts}
        />
      </li>
    );
  });

  const privateThemes = data.privateThemes.map(theme => {
    const customizeShortcut = {
      title: 'Customize',
      handleClick: handleCustomizeShortcut,
    };
    const deleteShortcut = {
      title: 'Delete',
      handleClick: () => dataService.removeTheme(theme._id),
    };
    const privateThemeShortcuts = [customizeShortcut, deleteShortcut];
    return (
      <li className="theme__card" key={theme._id}>
        <CardButton
          dataService={dataService}
          handleClick={setCurrentTheme}
          theme={theme}
          themeShortcuts={privateThemeShortcuts}
        />
      </li>
    );
  });

  const tabContent = (
    <div className="theme__container">
      <ul className="theme__list">
        <li className="theme__card">
          <AddNewCardButton
            handleClick={() => {
              setActiveTab('customize');
              setCurrentTheme({
                isPublic: false,
                font: 'Open Sans',
                questionColor: '#3D3D3D',
                answerColor: '#4FB0AE',
                backgroundColor: '#FFFFFF',
                buttonColor: '#4FB0AE',
                name: 'New theme',
              });
            }}
          />
        </li>
        {activeTab === 'public' ? publicThemes : privateThemes}
      </ul>
    </div>
  );

  return (
    <Fragment>
      <div className="design__panel">
        <h2>Design</h2>
        <div className="theme__tabs">
          <Button
            variant="outline"
            type="button"
            size="sm"
            label="Public Themes"
            onClick={() => setActiveTab('public')}
            isActive={activeTab === 'public'}
          />
          <Button
            variant="outline"
            type="button"
            size="sm"
            label="My Themes"
            onClick={() => setActiveTab('private')}
            isActive={activeTab === 'private'}
          />
          <Button
            variant="outline"
            type="button"
            size="sm"
            label="Customize"
            onClick={() => setActiveTab('customize')}
            isActive={activeTab === 'customize'}
          />
        </div>

        {activeTab !== 'customize' && (
          <BrowserRouter>{tabContent}</BrowserRouter>
        )}
        {activeTab === 'customize' && (
          <ThemeCustomizeTab
            theme={currentTheme}
            handleChange={handleChange}
            showSaveButton={showSaveButton}
            setShowSaveButton={setShowSaveButton}
          />
        )}
      </div>
    </Fragment>
  );
};

export default DesignPanel;
