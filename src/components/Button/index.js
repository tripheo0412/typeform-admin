// @flow
import './styles.scss';

import classNames from 'classnames';
import React from 'react';

type Variant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'danger'
  | 'duplicate'
  | 'addquestion';

type Size = 'sm' | 'md' | 'lg';

type Props = {
  variant?: Variant,
  size: Size,
  label: string,
  disabled?: boolean,
  onClick?: any => void,
};

export const Button = ({ variant, label, disabled, onClick, size }: Props) => {
  const buttonClasses = classNames({
    button: true,
    'button--primary': variant === 'primary',
    'button--secondary': variant === 'secondary',
    'button--outline': variant === 'outline',
    'button--addquestion': variant === 'addquestion',
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
