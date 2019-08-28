// @flow
import * as React from 'react';
import './styles.scss';

type Theme = {
  [string]: string,
};
type Props = {
  theme?: Theme,
  label?: string,
  counter?: number,
  children?: React.Node,
};
export const QuestionLabel = ({ label, counter, children, theme }: Props) => (
  <div className="questionfield" data-theme={theme}>
    <section className="questionfield__section">
      <div className="questionfield__content">
        <div className="questionfield__counter">
          <div className="questionfield__counter--number">{counter}</div>
          <div className="questionfield__counter--icon"></div>
        </div>
        <div className="questionfield__label">{label}</div>
        <div className="questionfield__children">{children}</div>
      </div>
    </section>
  </div>
);

export default QuestionLabel;
