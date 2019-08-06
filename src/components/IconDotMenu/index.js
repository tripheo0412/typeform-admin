// @flow

import * as React from 'react';
import classNames from 'classnames';
import { useOnClickOutside } from '../../custom-hooks/useOnClickOutside';
import './styles.scss';

type Props = {
  children: React.Node,
  direct?: string,
};

const IconDotMenu = ({ children, direct }: Props) => {
  const [isOpen, setIsOff] = React.useState(false);
  const ref = React.useRef(null);

  useOnClickOutside(ref, () => setIsOff(false));

  const handleToggle = () => setIsOff(!isOpen);

  const direction = classNames({
    'icondot__dropdown--left': direct === 'left',
    'icondot__dropdown--right': direct === 'right',
  });
  return (
    <button ref={ref} type="button" className="icondot" onClick={handleToggle}>
      {isOpen && <div className={direction}>{children}</div>}
    </button>
  );
};
IconDotMenu.defaultProps = {
  direct: 'right',
};
export default IconDotMenu;
