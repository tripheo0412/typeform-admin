// @flow
import React from 'react';
import './styles.scss';

type Props = {
  label: string,
  handleToggle: () => any,
};
export const AddQuestion = ({
  label = 'Add Question',
  handleToggle,
}: Props) => (
  <div className="add__question">
    <div
      className="add__question__items"
      role="button"
      tabIndex="0"
      onKeyPress={() => {}}
      onClick={handleToggle}
    >
      <span className="add__button"></span>
      <span>{label}</span>
    </div>
  </div>
);

export default AddQuestion;
