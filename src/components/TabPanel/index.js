// @flow
import React, { useState } from 'react';
import Button from '../Button/index';
import type { RadioProps, TabProps } from './types.js.flow';
import './styles.scss';

export const RadioControl = ({ handleClick }: RadioProps) => {
  const [isON, setIsON] = useState(true);
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
      className={isON ? 'radio__control' : 'radio__control radio__control-ON'}
    ></div>
  );
};
export const TabPanel = ({
  type,
  title,
  label,
  handleClick,
  options,
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
    {type === 'control' && <RadioControl handleClick={handleClick} />}
    {type === 'select' && (
      <select>
        {options.map(option => (
          <option value={option.value}>{option.title}</option>
        ))}
      </select>
    )}
  </div>
);

export default TabPanel;
