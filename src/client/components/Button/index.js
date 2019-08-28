// @flow
import * as React from 'react';
import IconCheck from '../../assets/icons/iconCheck.svg';
import './styles.scss';

type Theme = {
  [string]: string,
};

type ButtonType = { text: string, handleClick?: () => any, theme?: Theme };

export const Button = ({ text, theme, handleClick }: ButtonType) => (
  <div
    role="button"
    tabIndex={0}
    onKeyPress={handleClick}
    className="button-client"
    style={theme}
  >
    <div className="button-client__content">
      <button type="submit" onClick={handleClick}>
        <div className="button-client__button">
          {text}
          {text === 'OK' && <img src={IconCheck} alt="icon" />}
        </div>
      </button>
    </div>

    <div className="button-client__helper">
      press<strong>enter</strong>
    </div>
  </div>
);

export default Button;
