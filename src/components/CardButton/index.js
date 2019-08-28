// @flow
import React, { useState } from 'react';

import IconDotMenu from '../IconDotMenu';
import DropDown from '../DropDownMenu';
import PopUp from '../PopUp';

import './styles.scss';

export type AddNewCardButtonProps = {
  isTemplate?: boolean,
  handleClick?: Function,
};

export const AddNewCardButton = ({
  isTemplate = false,
  handleClick,
}: AddNewCardButtonProps) => (
  <div>
    <div
      className="cardbutton"
      onClick={handleClick}
      onKeyPress={() => {}}
      role="button"
      tabIndex={0}
    >
      <div className="cardbutton__items">
        {isTemplate ? 'New Template' : 'New Theme'}
      </div>
    </div>
  </div>
);

export type CardButtonProps = {
  history?: Object,
  isTemplate?: boolean,
  template?: Object,
  theme?: Object,
  themeShortcuts?: Array<{
    title: string,
    handleClick: any => any,
  }>,
  handleClick: any => void,
  dataService?: Object,
};

export const CardButton = ({
  history = {},
  isTemplate = false,
  template = {},
  theme = {},
  handleClick,
  dataService = {},
  themeShortcuts = [],
}: CardButtonProps) => {
  const {
    backgroundColor,
    backgroundImage,
    questionColor,
    answerColor,
    buttonColor,
  } = isTemplate ? template.theme : theme;
  const [openRenamePopup, setOpenRenamePopup] = useState(false);

  const backgroundStyle = {
    backgroundColor,
    backgroundImage,
  };

  const handleViewingForms = () => {
    history.push(`/templates/${template._id}/forms`, { template });
  };

  const { responses } = template;

  let responsesNumber = <span>0 responses</span>;
  if (typeof responses === 'number') {
    switch (responses) {
      case 0:
        responsesNumber = <span>0 responses</span>;
        break;
      case 1:
        responsesNumber = (
          <button
            type="button"
            className="cardbutton__footer__button"
            onClick={handleViewingForms}
          >
            1 response
          </button>
        );
        break;
      default:
        responsesNumber = (
          <button
            type="button"
            className="cardbutton__footer__button"
            onClick={handleViewingForms}
          >
            {`${responses} responses`}
          </button>
        );
    }
  }

  const shortcuts: Array<{
    title: string,
    handleClick: () => any,
  }> = [
    {
      title: 'Edit',
      handleClick: () => {
        history.push(`/templates/${template._id}/edit`, { template });
      },
    },
    {
      title: 'Forms',
      handleClick: handleViewingForms,
    },
    {
      title: 'Rename',
      handleClick: () => setOpenRenamePopup(!openRenamePopup),
    },
    {
      title: 'Duplicate',
      handleClick: () => dataService.createTemplate(template),
    },
    {
      title: 'Delete',
      handleClick: () => dataService.removeTemplate(template),
    },
  ];

  const updateTemplateName = name => {
    const newTemplate = { ...template, name };
    dataService.updateTemplate(newTemplate);
  };

  return (
    <div className="cardbutton" draggable>
      <div className="cardbutton__body" style={backgroundStyle}>
        <div
          className="cardbutton__link"
          role="button"
          tabIndex="0"
          onKeyPress={() => {}}
          onClick={
            isTemplate ? () => handleClick(template) : () => handleClick(theme)
          }
        >
          {isTemplate && template ? (
            template.name
          ) : (
            <>
              <span style={{ color: questionColor }}>Question</span>
              <span style={{ color: answerColor }}>Answer</span>
              <span
                style={{
                  background: buttonColor,
                  marginTop: '5px',
                  borderRadius: '5px',
                  height: '15px',
                  width: '35px',
                }}
              ></span>
            </>
          )}
        </div>

        <div className="cardbutton__footer">
          {isTemplate ? responsesNumber : theme.name}
          <IconDotMenu>
            <DropDown options={isTemplate ? shortcuts : themeShortcuts} />
          </IconDotMenu>
        </div>
      </div>

      {openRenamePopup ? (
        <PopUp
          title="Rename This Template"
          buttonSubmit="save"
          handleSubmit={updateTemplateName}
          handleCancel={() => setOpenRenamePopup(false)}
        />
      ) : null}
    </div>
  );
};
