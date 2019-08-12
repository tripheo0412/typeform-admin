// @flow
import React, { useState, useContext } from 'react';
import Button from '../Button/index';
import type { RadioProps, TabProps } from './types.js.flow';
import { ThemeContext } from '../../contexts/ThemeContext';
import './styles.scss';

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
  type,
  title,
  label,
  handleClick,
  options,
  color,
}: TabProps) => {
  const { isDark } = useContext(ThemeContext);

  return (
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
        <RadioControl handleClick={handleClick} isEnabled={isDark} />
      )}
      {type === 'select' && (
        <select>
          {options.map(option => (
            <option value={option.value}>{option.title}</option>
          ))}
        </select>
      )}
      {type === 'color' && (
        <input type="color" value={color} onChange={handleClick} />
      )}
    </div>
  );
};

export default TabPanel;

RadioControl.defaultProps = {
  isEnabled: false,
};
