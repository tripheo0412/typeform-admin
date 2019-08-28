import React, { Fragment, useState, useContext } from 'react';
import InputField from '../InputField';
import TabPanel from '../TabPanel';
import { Button } from '../Button';

import { DataContext } from '../../contexts/DataContext';

import './styles.scss';

type Props = {
  theme: Object,
  handleChange: any => void,
  showSaveButton: boolean,
  setShowSaveButton: void => void,
};

const ThemeCustomizeTab = ({
  theme,
  handleChange,
  showSaveButton,
  setShowSaveButton,
}: Props) => {
  const { dataService } = useContext(DataContext);

  const saveChanges = () => {
    const newTheme = { ...theme };
    if (newTheme._id) {
      console.log(newTheme);
      if (newTheme.isPublic === true) {
        newTheme.name += ' (Copy)';
        dataService.createTheme(newTheme);
      } else {
        dataService.updateTheme(newTheme);
      }
    } else {
      dataService.createTheme(newTheme);
    }

    setShowSaveButton(false);
  };

  const fontOptions = [
    {
      value: 'Open Sans',
      title: 'Open Sans',
    },
    {
      value: 'Roboto',
      title: 'Roboto',
    },
    {
      value: 'Times New Roman',
      title: 'Times New Roman',
    },
    {
      value: 'Arial',
      title: 'Arial',
    },
    {
      value: 'Comic Sans',
      title: 'Comic Sans',
    },
  ];

  return (
    <Fragment>
      <div className="customize__tab">
        <div className="theme__name">
          <InputField
            className="theme__input"
            id="name"
            value={theme.name}
            type="text"
            placeholder="My theme"
            variant="template"
            handleChange={handleChange}
            isRequired
          />
        </div>
        <TabPanel
          type="select"
          title="Font"
          id="font"
          initialValue={theme.font}
          options={fontOptions}
          handleClick={handleChange}
        />
        <TabPanel
          type="color"
          title="Questions"
          id="questionColor"
          color={theme.questionColor}
          handleClick={handleChange}
        />
        <TabPanel
          type="color"
          title="Answers"
          id="answerColor"
          color={theme.answerColor}
          handleClick={handleChange}
        />
        <TabPanel
          type="color"
          title="Buttons"
          id="buttonColor"
          color={theme.buttonColor}
          handleClick={handleChange}
        />
        <TabPanel
          type="color"
          title="Background"
          id="backgroundColor"
          color={theme.backgroundColor}
          handleClick={handleChange}
        />
      </div>
      {showSaveButton && (
        <div className="save__button">
          <Button
            variant="addquestion"
            type="button"
            size="lg"
            label="Save changes"
            onClick={saveChanges}
          />
        </div>
      )}
    </Fragment>
  );
};

export default ThemeCustomizeTab;
