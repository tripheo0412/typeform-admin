// @flow
import './styles.scss';

import React from 'react';

import up from './assets/keyboard_arrow_up_24px.svg';
import down from './assets/keyboard_arrow_down_24px.svg';
import left from './assets/keyboard_arrow_left_24px.svg';
import right from './assets/keyboard_arrow_right_24px.svg';

type Props = {
  color: string,
  prev?: () => void,
  next?: () => void,
};

const NavButtons = ({ color, prev, next }: Props) => {
  const buttonStyle = {
    color,
  };
  return (
    <div className="navbuttons">
      <button
        className="btn navbuttons__desktop navbuttons__desktop--left"
        type="button"
        styles={buttonStyle}
        onClick={prev}
      >
        <img className="navbuttons__img" src={up} alt="" />
      </button>
      <button
        className="btn navbuttons__desktop navbuttons__desktop--right"
        type="button"
        onClick={next}
      >
        <img className="navbuttons__img" src={down} alt="" />
      </button>
      <button
        className="btn navbuttons__mobile navbuttons__mobile--left"
        type="button"
        onClick={prev}
      >
        <img className="navbuttons__img" src={left} alt="" />
      </button>
      <button
        className="btn navbuttons__mobile navbuttons__mobile--right"
        type="button"
        onClick={next}
      >
        <img className="navbuttons__img" src={right} alt="" />
      </button>
    </div>
  );
};

export default NavButtons;
