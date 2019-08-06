/* eslint-disable jsx-a11y/label-has-for */
// @flow
import React from 'react';
import classNames from 'classnames';
import search from '../../assets/icons/iconSearch.svg';
import './styles.scss';

type Props = {
  id: string,
  type: string,
  isRequired?: boolean,
  value?: string,
  labelText?: string,
  placeholder?: string,
  variant?: string,
  handleChange: any => void,
};

export const InputField = ({
  id,
  labelText,
  value,
  type,
  placeholder,
  variant,
  handleChange,
  isRequired,
}: Props) => {
  const inputStyles = classNames({
    'inputField--primary': variant === 'primary',
    'inputField--dialog': variant === 'dialog',
    'inputField--template': variant === 'template',
    'inputField--search': variant === 'search',
  });

  return (
    <label htmlFor={id} className="input__container">
      <span>{labelText}</span>
      {variant === 'search' ? (
        <div id={id} className="input__container--search">
          <img className="inputField__img" src={search} alt="search" />
          <input
            className={inputStyles}
            variant={variant}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            required={isRequired}
          />
        </div>
      ) : (
        <input
          id={id}
          className={inputStyles}
          variant={variant}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          required={isRequired}
        />
      )}
    </label>
  );
};

InputField.defaultProps = {
  variant: 'inputField--primary',
  value: '',
  isRequired: false,
};

export default InputField;
