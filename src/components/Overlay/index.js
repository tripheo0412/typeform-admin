import React from 'react';
import classNames from 'classnames';
import './styles.scss';

type Props = {
  handleClick: () => void,
  isSidebar?: boolean,
};

export const Overlay = ({ handleClick, isSidebar }: Props) => {
  const overlayStyles = classNames({
    overlay: true,
    'overlay--sidebar': isSidebar,
  });
  return (
    <div
      className={overlayStyles}
      tabIndex={0}
      role="button"
      onKeyPress={() => {}}
      onClick={handleClick}
    ></div>
  );
};

export default Overlay;
