// @flow
import './styles.scss';

import React, { useState } from 'react';

import Button from '../Button';

import type { RadioProps, TabProps } from './types.js.flow';

export const RadioControl = ({ handleClick, isEnabled }: RadioProps) => {
  const [isON, setIsON] = useState(isEnabled);
  const handleToggle = () => {
    setIsON(!isON);
    handleClick();
  };

  return (
    <div
      role="button"
      onClick={handleToggle}
      tabIndex={() => {}}
      onKeyPress={handleToggle}
      className={!isON ? 'radio__control' : 'radio__control radio__control-ON'}
    ></div>
  );
};

export const TabPanel = ({
  id,
  type,
  title,
  label,
  handleClick,
  options = [],
  color,
  isEnabled,
  initialValue,
}: TabProps) => (
  <div className="panel__tab">
    <span className="tab__label">{title}</span>
    {type === 'button' && (
      <Button
        label={label}
        variant="secondary"
        size="sm"
        onClick={handleClick}
      />
    )}
    {type === 'control' && (
      <RadioControl handleClick={handleClick} isEnabled={isEnabled} />
    )}
    {type === 'select' && (
      <select id={id} value={initialValue} onChange={handleClick}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    )}
    {type === 'color' && (
      <input type="color" id={id} value={color} onChange={handleClick} />
    )}
  </div>
);

export default TabPanel;

TabPanel.defaultProps = {
  isEnabled: false,
};

RadioControl.defaultProps = {
  isEnabled: false,
};
