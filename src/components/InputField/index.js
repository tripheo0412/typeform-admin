/* eslint-disable jsx-a11y/label-has-for */
// @flow
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
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
  error?: string,
};

export const InputField = ({
  id,
  labelText,
  value,
  type,
  placeholder,
  variant,
  handleChange,
  error = '',
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
          <div className="inputField__img"> </div>
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
      {error && <div style={{ color: 'var(--color-danger)' }}>{error}</div>}
    </label>
  );
};

InputField.defaultProps = {
  variant: 'inputField--primary',
  value: '',
  isRequired: false,
};

export default InputField;
