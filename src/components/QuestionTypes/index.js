/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
// @flow
import * as React from 'react';
import classnames from 'classnames';
import './styles.scss';

type Props = {
  isOpen?: boolean,
  handleType: (...any) => void,
};

type Question = {
  [string]: string,
};

export const questions: Question = Object.freeze({
  iconCheck: 'choicebox',
  iconPhone: 'tel',
  iconShortText: 'shottext',
  iconLongText: 'longtext',
  iconPhoto: 'picture',
  iconNavDown: 'dropdown',
  iconOpinion: 'opinion',
  iconYesnoQuestion: 'yesorno',
  iconEmail: 'email',
  iconLink: 'website',
  iconRating: 'rates',
  iconDate: 'date',
  iconFile: 'upload',
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
            title={questions[type]}
            className={`question__Types__icon question__Types__icon--${type}`}
            src={require(`../../assets/icons/${type}.svg`)}
            alt="icon"
          />
          <span title={questions[type]}>{questions[type]}</span>
        </div>
      ))}
    </div>
  );
};

QuestionTypes.defaultProps = {
  isOpen: false,
};

export default QuestionTypes;
