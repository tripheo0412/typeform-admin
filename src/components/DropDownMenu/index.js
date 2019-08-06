// @flow
import * as React from 'react';
import './styles.scss';

type Props = {
  options: Array<{
    title: string,
    handleClick: () => any,
  }>,
  children?: React.Node,
};

export const DropDown = ({ options, children }: Props) => (
  <div className="dropdown__card">
    {options.map(option => (
      <React.Fragment key={option.title}>
        <span
          className="dropdown__card__link"
          onClick={option.handleClick}
          role="button"
          tabIndex="0"
          onKeyPress={() => {}}
        >
          {option.title}
        </span>
      </React.Fragment>
    ))}
    {children && <div className="dropdown__card--children">{children}</div>}
  </div>
);

export default DropDown;
