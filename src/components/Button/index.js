// @flow
import './styles.scss';

import classNames from 'classnames';
import React from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

type Variant = 'primary' | 'secondary' | 'outline' | 'danger' | 'duplicate';

type Size = 'sm' | 'md' | 'lg';

type Props = {
  variant?: Variant,
  size: Size,
  label: string,
  disabled?: boolean,
  onClick?: any => void,
};

export const Button = ({ variant, label, disabled, onClick, size }: Props) => {
  const { dark } = React.useContext(ThemeContext);
  const buttonClasses = classNames({
    button: true,
    'button--primary': variant === 'primary',
    'button--primary--dark': variant === 'primary' && dark,
    'button--secondary': variant === 'secondary',
    'button--outline': variant === 'outline',
    'button--danger': variant === 'danger',
    'button--duplicate': variant === 'duplicate',
    'button--sm': size === 'sm',
    'button--md': size === 'md',
    'button--lg': size === 'lg',
  });

  return (
    <button
      type="submit"
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  variant: '',
  disabled: false,
  onClick: () => {},
};
