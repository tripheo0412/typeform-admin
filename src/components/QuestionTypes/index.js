/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
// @flow
import * as React from 'react';
import classnames from 'classnames';
import './styles.scss';

type Props = {
  isOpen?: boolean,
  handleType: () => any,
};

type Question = {
  [string]: string,
};

export const questions: Question = Object.freeze({
  iconCheck: 'multiple choice',
  iconPhone: 'phone number',
  iconShortText: 'short text',
  iconLongText: 'long text',
  iconQuote: 'statement',
  iconPhoto: 'picture choice',
  iconYesnoQuestion: 'yes/no',
  iconEmail: 'email',
  iconLink: 'website',
  iconRating: 'rating',
  iconDate: 'date',
  iconNumber: 'number',
  iconFile: 'file upload',
});

export const QuestionTypes = ({ handleType, isOpen }: Props) => {
  const questionsKeys: Array<string> = Object.keys(questions);
  const questionTypesStyle = classnames({
    question__Types: true,
    'question__Types--hide': !isOpen,
  });
  return (
    <div className={questionTypesStyle}>
      {questionsKeys.map(type => (
        <div
          key={type}
          className="question__Types__link"
          role="button"
          title={questions[type]}
          tabIndex={0}
          onKeyPress={() => {}}
          onClick={handleType}
        >
          <img
            className={`question__Types__icon question__Types__icon--${type}`}
            src={require(`../../assets/icons/${type}.svg`)}
            alt="icon"
          />
          <span>{questions[type]}</span>
        </div>
      ))}
    </div>
  );
};

QuestionTypes.defaultProps = {
  isOpen: false,
};

export default QuestionTypes;
