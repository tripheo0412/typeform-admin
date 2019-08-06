// @flow

import * as React from 'react';
import Button from '../Button';

import './styles.scss';

type Props = {
  children?: React.Node,
  handleDown?: () => any,
  handleUp?: () => any,
};

export const QuestionSetting = ({ children, handleUp, handleDown }: Props) => {
  const [isClose, setIsClose] = React.useState(false);
  const handleToggle = () => setIsClose(!isClose);

  return (
    !isClose && (
      <div className="panel">
        <div className="panel__header">
          <div className="header__content">
            <span className="header__title">question settings</span>
            <div className="icon">
              <div className="icon icon--desktop">
                <button
                  onKeyDown={handleUp}
                  onClick={handleUp}
                  type="button"
                  className="buttons buttons--up"
                ></button>

                <button
                  onClick={handleDown}
                  type="button"
                  className="buttons buttons--down"
                ></button>
              </div>
              <button
                onClick={handleToggle}
                type="button"
                className="buttons buttons--close"
              ></button>
            </div>
          </div>
        </div>
        <div className="panel__content">{children}</div>
        <div className="panel__button">
          <div className="panel__button--left">
            <Button
              label="Delete"
              variant="danger"
              size="md"
              onClick={() => {}}
            />
          </div>
          <div>
            <Button
              label="Duplicate"
              variant="duplicate"
              size="md"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default QuestionSetting;
