// @flow

import * as React from 'react';
import './styles.scss';
import { DataContext } from '../../contexts/DataContext';

type ShareType = {
  link?: string,
};
export const Share = ({ link }: ShareType) => {
  const handleCopy = () => {
    const input = document.querySelector('input');
    if (input) {
      input.focus();
      input.select();
      document.execCommand('copy');
    }
  };
  return (
    <div className="share">
      <div className="share__label">Share your form</div>
      <div className="share__items">
        <div className="share__input">
          <input type="text" value={link} />
        </div>
        <button type="submit" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Share;
