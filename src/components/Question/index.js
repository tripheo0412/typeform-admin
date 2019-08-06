/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
// eslint-disable-next-line global-require
// eslint-disable-next-line import/no-dynamic-require
// @flow
import * as React from 'react';
import './styles.scss';
import classnames from 'classnames';
import QuestionTypes, { questions } from '../QuestionTypes';
import IconDotMenu from '../IconDotMenu';
import DropDownMenu from '../DropDownMenu';
import setting from './assets/setting.svg';
import AddQuestion from '../AddQuestion';
import { useOnClickOutside } from '../../custom-hooks/useOnClickOutside';

type questionProps = {
  type?: string,
  isRequired?: boolean,
  hasDescription?: boolean,
  hasPicture?: boolean,
  hasURL?: boolean,
};

type Ref = {
  current: React.ElementRef<any> | null,
};

const options = [
  { title: 'Duplicate', handleClick: () => {} },
  { title: 'Delete', handleClick: () => {} },
];

export const Question = ({
  type,
  isRequired,
  hasDescription,
  hasPicture,
  hasURL,
}: questionProps) => {
  const questionEl: Ref = React.useRef(null);
  const addQuestionEl: Ref = React.useRef(null);
  const [addButtonOpacity, setAddButtonOpacity] = React.useState(0);
  const [questionText, setQuestionText] = React.useState('');
  const [showQuestionTypes, setShowQuestionTypes] = React.useState(false);
  const addButtonStyles = classnames({
    'button__icon--add': true,
    'button__icon--add-show': addButtonOpacity,
  });
  const onTextChangeHandler = event => {
    setQuestionText(event.target.value);
  };
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

  const typeStyles = classnames({
    question__type: true,
    'question__type--mobile--isRequired': isRequired,
    'question__type--mobile--hasDescription': hasDescription,
    'question__type--longText': type === 'long text',
    'question__type--shortText': type === 'short text',
    'question__type--phonenumber': type === 'phone number',
    'question__type--mulChoice': type === 'multiple choice',
    'question__type--picChoice': type === 'picture choice',
    'question__type--statement': type === 'statement',
    'question__type--email': type === 'email',
    'question__type--rating': type === 'rating',
    'question__type--date': type === 'date',
    'question__type--number': type === 'number',
    'question__type--file': type === 'file upload',
    'question__type--link': type === 'link',
    'question__type--YesNo': type === 'yes/no',
  });

  return (
    <React.Fragment>
      <div className="question__container">
        <div
          draggable
          className="question"
          role="button"
          tabIndex="0"
          onKeyPress={() => {}}
          ref={questionEl}
        >
          {isRequired && <span className="question--required">*</span>}

          <div className={typeStyles}>
            {questionsQuery()}
            <span>{icon}</span>
            <span className="question__number">1</span>
          </div>
          <div className="question__body">
            <textarea
              className="question__text"
              value={questionText}
              onClick={questionBackgroundHandler}
              onChange={onTextChangeHandler}
              placeholder="Before we start, can we get your first name"
            ></textarea>
            {hasDescription && (
              <textarea
                className="question__text--description"
                placeholder="Write your description"
              ></textarea>
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
                  onClick={() => {}}
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
              <QuestionTypes isOpen={showQuestionTypes} handleType={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Question.defaultProps = {
  type: 'short text',
  isRequired: false,
  hasDescription: false,
  hasPicture: false,
  hasURL: false,
};
export default Question;
