// @flow
import React from 'react';
import './styles.scss';

type Theme = {
  [string]: string,
};
type Props = {
  totalQuestions: number,
  currentQuestion: number,
  theme?: Theme,
};

const ProgressBar = ({ currentQuestion = 0, totalQuestions, theme }: Props) => {
  if (currentQuestion > totalQuestions || currentQuestion < 0) {
    return null;
  }

  // position values
  const percentage = Math.round((currentQuestion / totalQuestions) * 100);
  const zIndex = percentage === 0 ? -1 : 1;

  return (
    <div className="progressbar" style={theme}>
      <div className="progressbar__inner">
        <div className="progressbar__inner--track">
          <div
            className="progressbar__inner--track--filler"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="progressbar__inner--handle progressbar__inner--handle--start">
          <div className="progressbar__inner--handle--start--img"></div>
        </div>
        <div
          className="progressbar__inner--handle progressbar__inner--handle--position"
          style={{
            left: `${percentage}%`,
            zIndex: `${zIndex}`,
          }}
        >
          <span className="progressbar__inner--handle--position--number">
            {percentage}%
          </span>
        </div>
        <div className="progressbar__inner--handle progressbar__inner--handle--end">
          <div className="progressbar__inner--handle--end--img"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
