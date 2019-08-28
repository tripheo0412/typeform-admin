// @flow
import * as React from 'react';
import classNames from 'classnames';
import './styles.scss';

type Theme = {
  [string]: string,
};
type ChoicetabProps = {
  letter: string,
  text: string,
  theme?: Theme,
  checked: boolean,
  handleToggle: () => any,
};

export const ChoiceTab = ({
  letter,
  text,
  theme,
  checked,
  handleToggle,
}: ChoicetabProps) => (
  <div
    className={classNames({
      choicetab: true,
      'choicetab--checked blink': checked,
    })}
    style={theme}
    role="button"
    onKeyPress={() => {}}
    tabIndex={0}
    onClick={handleToggle}
  >
    <div
      className={classNames({
        choicetab__keyhelper: true,
        'choicetab__keyhelper--checked': checked,
      })}
    >
      <span>{letter}</span>
    </div>
    <div className="choicetab__title">{text}</div>
    <div className="choicetab__check">
      {checked && <div className="choicetab__check--icon"></div>}
    </div>
  </div>
);
export default ChoiceTab;
