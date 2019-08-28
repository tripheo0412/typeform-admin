/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
// eslint-disable-next-line global-require
// eslint-disable-next-line import/no-dynamic-require
// @flow
import * as React from 'react';
import './styles.scss';
import classnames from 'classnames';
import ContentEditable from 'react-contenteditable';
import QuestionTypes, { questions } from '../QuestionTypes';
import IconDotMenu from '../IconDotMenu';
import DropDownMenu from '../DropDownMenu';
import setting from './assets/setting.svg';
import photo from './assets/photo.svg';
import AddQuestion from '../AddQuestion';
import { useOnClickOutside } from '../../custom-hooks/useOnClickOutside';

type questionProps = {
  _id: string,
  type: string,
  label?: string,
  showQuestionSetting: string => void,
  isRequired?: boolean,
  // hasDescription?: boolean,
  hasPicture?: boolean,
  hasURL?: boolean,
  order: number,
  choices: Array<any>,
  isMultiplechoice?: boolean,
  onTextChangeHandler: any => void,
  onChoiceChangeHandler: (...any) => void,
  onAddChoiceHandler: (...any) => void,
  onAddPictureChoiceHandler: (...any) => void,
  onPictureChoiceChangeHandler: (...any) => void,
  onAddQuestionHandler: (...any) => void,
  onDuplicateQuestionHandler: any => void,
  onDeleteQuestionHandler: any => void,
  onPictureButtonClickHandler: (...any) => void,
};

type Ref = {
  current: React.ElementRef<any> | null,
};

export const Question = ({
  _id,
  type,
  label,
  isRequired,
  // hasDescription,
  isMultiplechoice,
  hasPicture,
  hasURL,
  showQuestionSetting,
  onTextChangeHandler,
  order,
  choices,
  onChoiceChangeHandler,
  onAddChoiceHandler,
  onAddQuestionHandler,
  onAddPictureChoiceHandler,
  onDuplicateQuestionHandler,
  onPictureChoiceChangeHandler,
  onDeleteQuestionHandler,
  onPictureButtonClickHandler,
}: questionProps) => {
  const questionEl: Ref = React.useRef(null);
  const addQuestionEl: Ref = React.useRef(null);
  const options = [
    { title: 'Duplicate', handleClick: () => onDuplicateQuestionHandler() },
    { title: 'Delete', handleClick: () => onDeleteQuestionHandler() },
  ];
  const [addButtonOpacity, setAddButtonOpacity] = React.useState(0);
  const [showQuestionTypes, setShowQuestionTypes] = React.useState(false);

  const addButtonStyles = classnames({
    'button__icon--add': true,
    'button__icon--add-show': addButtonOpacity,
  });

  let icon;

  const questionsQuery = () => {
    for (const key in questions) {
      if (questions[key] === type) {
        icon = (
          <img
            className="question__type--icon"
            src={require(`../../assets/icons/${key}.svg`)}
            alt="icon"
          />
        );
      }
    }
  };

  const questionBackgroundHandler = () => {
    if (questionEl.current) {
      questionEl.current.style.backgroundColor = '#FAFAFA';
    }
    setAddButtonOpacity(1);
  };

  useOnClickOutside(questionEl, () => {
    if (questionEl.current) {
      questionEl.current.style.backgroundColor = 'white';
    }
    setShowQuestionTypes(false);
    setAddButtonOpacity(0);
  });
  useOnClickOutside(addQuestionEl, () => setShowQuestionTypes(false));

  const openQuestionTypesHandler = () => {
    if (questionEl.current) {
      questionEl.current.focus();
    }
    setShowQuestionTypes(true);
  };

  const changeChoiceTextHandler = (e, index, questionId) => {
    onChoiceChangeHandler(e, index, questionId);
  };

  const addChoiceHandler = (e, index, questionId) => {
    onAddChoiceHandler(e, index, questionId);
  };

  const addPictureChoiceHandler = (e, index, questionId) => {
    onAddPictureChoiceHandler(e, index, questionId);
  };

  const changePictureChoiceHandler = (e, index, questionId) => {
    onPictureChoiceChangeHandler(e, index, questionId);
  };

  const pictureButtonClickHandler = (e, index, questionId) => {
    onPictureButtonClickHandler(e, index, questionId);
  };

  const openQuestionSettingHandler = questionId => {
    showQuestionSetting(questionId);
  };
  const typeStyles = classnames({
    question__type: true,
    'question__type--mobile--isRequired': isRequired,
    'question__type--longText': type === 'longtext',
    'question__type--shortText': type === 'shottext',
    'question__type--phonenumber': type === 'tel',
    'question__type--mulChoice': type === 'choicebox',
    'question__type--picChoice': type === 'picture',
    'question__type--dropDown': type === 'dropdown',
    'question__type--opinion': type === 'opinion',
    'question__type--email': type === 'email',
    'question__type--rating': type === 'rates',
    'question__type--date': type === 'date',
    'question__type--file': type === 'upload',
    'question__type--link': type === 'website',
    'question__type--YesNo': type === 'yesorno',
  });

  return (
    <React.Fragment>
      <div className="question__container">
        {isRequired && <span className="question--required">*</span>}
        <div
          draggable
          className="question"
          role="button"
          tabIndex="0"
          onKeyPress={() => {}}
          ref={questionEl}
        >
          <div className={typeStyles}>
            {questionsQuery()}
            <span>{icon}</span>
            <span className="question__number">{order}</span>
          </div>
          <div className="question__body">
            <ContentEditable
              data-placeholder="Type a question..."
              className="question__text"
              onClick={questionBackgroundHandler}
              html={label}
              onChange={onTextChangeHandler}
            />
            {isMultiplechoice && choices.length !== 0 && (
              <ul className="question__choices">
                {choices.map((choice, index) => (
                  <li key={index} className="question__choice">
                    <input
                      onKeyDown={e => addChoiceHandler(e, index, _id)}
                      className="question__input"
                      placeholder="type your option"
                      onChange={e => changeChoiceTextHandler(e, index, _id)}
                      value={choice}
                    />
                  </li>
                ))}
              </ul>
            )}
            {isMultiplechoice && choices.length === 0 && (
              <ul className="question__choices">
                <li key={0} className="question__choice">
                  <input
                    onKeyDown={e => addChoiceHandler(e, 0, _id)}
                    placeholder="type your option"
                    className="question__input"
                    onChange={e => changeChoiceTextHandler(e, 0, _id)}
                    value=""
                  />
                </li>
              </ul>
            )}
            {type === 'picture' && choices.length !== 0 && (
              <ul className="question__choices">
                {choices.map((choice, index) => (
                  <div key={index} className="question__choices--picture">
                    <div className="question__picture">
                      <img
                        className="question__picture--filler"
                        src={choice.value ? choice.value : photo}
                        alt="thumbnail"
                      />
                      <button
                        type="button"
                        className={
                          choice.value
                            ? 'question__buttons--close'
                            : 'question__buttons--add'
                        }
                        onClick={e => pictureButtonClickHandler(e, index, _id)}
                      ></button>
                    </div>
                    <li className="question__choice">
                      <input
                        onKeyDown={e => addPictureChoiceHandler(e, index, _id)}
                        className="question__input"
                        placeholder="type your option"
                        onChange={e =>
                          changePictureChoiceHandler(e, index, _id)
                        }
                        value={choice.text}
                      />
                    </li>
                  </div>
                ))}
              </ul>
            )}

            {type === 'picture' && choices.length === 0 && (
              <ul className="question__choices">
                <div key={0} className="question__choices--picture">
                  <div className="question__picture">
                    <img
                      className="question__picture--filler"
                      src={photo}
                      alt="thumbnail"
                    />
                    <button
                      type="button"
                      className="question__buttons--add"
                      onClick={e => pictureButtonClickHandler(e, 0, _id)}
                    ></button>
                  </div>
                  <li className="question__choice">
                    <input
                      onKeyDown={e => addPictureChoiceHandler(e, 0, _id)}
                      placeholder="type your option"
                      className="question__input"
                      onChange={e => changePictureChoiceHandler(e, 0, _id)}
                      value=""
                    />
                  </li>
                </div>
              </ul>
            )}
            {hasPicture && (
              <div>
                <span>This is the picture</span>
              </div>
            )}
            {hasURL && (
              <div>
                <span>The URL</span>
              </div>
            )}
            <div className="question__buttons">
              <div>
                <button
                  type="button"
                  className="button__icon"
                  onClick={() => openQuestionSettingHandler(_id)}
                >
                  <img src={setting} alt="settings button" />
                </button>
              </div>
              <div className="button--mobile">
                <IconDotMenu direct="left">
                  <DropDownMenu options={options} />
                </IconDotMenu>
              </div>
            </div>
            <div ref={addQuestionEl} className={addButtonStyles}>
              <AddQuestion label="" handleToggle={openQuestionTypesHandler} />
              <QuestionTypes
                isOpen={showQuestionTypes}
                handleType={onAddQuestionHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Question.defaultProps = {
  isRequired: false,
  isMultiplechoice: false,
  label: '',
  // hasDescription: false,
  hasPicture: false,
  hasURL: false,
};
export default Question;
