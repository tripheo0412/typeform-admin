// @flow
import React, { useState } from 'react';

import IconDotMenu from '../IconDotMenu';
import DropDown from '../DropDownMenu';
import PopUp from '../PopUp';

import './styles.scss';

export type AddNewCardButtonProps = {
  isTemplate?: boolean,
  handleClick: any => void,
};

export const AddNewCardButton = ({
  isTemplate = false,
  handleClick,
}: AddNewCardButtonProps) => (
  <div
    className="cardbutton"
    onClick={() => handleClick}
    onKeyPress={() => {}}
    role="button"
    tabIndex={0}
  >
    <div className="cardbutton__items">
      {isTemplate ? 'New Template' : 'New Theme'}
    </div>
  </div>
);

export type CardButtonProps = {
  history?: Object,
  link: string,
  isTemplate?: boolean,
  template?: Object,
  templateService?: Object,
  theme?: Object,
  handleClick: any => void,
};

export const CardButton = ({
  history = {},
  link,
  isTemplate = false,
  template = {},
  templateService = {},
  theme = {},
  handleClick,
}: CardButtonProps) => {
  const {
    backgroundColor,
    backgroundImage,
    questionColor,
    answerColor,
    buttonColor,
  } = theme;
  const [openRenamePopup, setOpenRenamePopup] = useState(false);

  const backgroundStyle = {
    backgroundColor,
    backgroundImage,
  };

  const handleViewingResponses = () => {
    history.push(`${link}/results`);
  };

  let responses = 0;
  if (isTemplate) {
    template.forms.forEach(form => {
      responses += form.responses.length;
    });
  }

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
            onClick={handleViewingResponses}
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
            onClick={handleViewingResponses}
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
        history.push(`${link}/edit`);
      },
    },
    {
      title: 'Preview',
      handleClick: () => {
        history.push(`${link}/preview`);
      },
    },
    {
      title: 'Result',
      handleClick: handleViewingResponses,
    },
    {
      title: 'Rename',
      handleClick: () => setOpenRenamePopup(!openRenamePopup),
    },
    {
      title: 'Duplicate',
      handleClick: () => {
        const newTemplate = template;
        delete newTemplate.id;
        templateService.create(newTemplate);
      },
    },
    {
      title: 'Delete',
      handleClick: () => {
        templateService.remove(template.id);
      },
    },
  ];

  const updateTemplateName = name => {
    const newTemplate = { ...template, name };
    templateService.update(newTemplate);
  };

  return (
    <div className="cardbutton" draggable>
      <div className="cardbutton__body" style={backgroundStyle}>
        <div
          className="cardbutton__link"
          role="button"
          tabIndex="0"
          onKeyPress={() => {}}
          onClick={handleClick}
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
            <DropDown
              options={
                isTemplate
                  ? shortcuts
                  : [{ title: 'Customize', handleClick: () => null }]
              }
            />
          </IconDotMenu>
        </div>
      </div>

      {openRenamePopup ? (
        <PopUp
          title="Rename this template"
          buttonSubmit="edit"
          handleSubmit={updateTemplateName}
        />
      ) : null}
    </div>
  );
};
