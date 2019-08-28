// @flow
import * as React from 'react';
import classNames from 'classnames';
import './styles.scss';
import { FormContext } from '../../contexts/FormContext';

type Theme = {
  [string]: string,
};

type Opinion = {
  theme?: Theme,
  order?: Number,
  handleScroll?: () => any,
};
export const OpinionScale = ({ theme, handleScroll, order }: Opinion) => {
  const [scale, setScale] = React.useState(22);
  const { dispatch } = React.useContext(FormContext);

  const firstUpdate = React.useRef(true);
  React.useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    }
    // dispatch({
    //   type: 'ADD__ANSWER',
    //   payload: { order, value: [scale] },
    // });
  }, [dispatch, order, scale]);

  const handleClick = index => () => {
    setScale(index);
    if (handleScroll) {
      handleScroll();
    }
  };

  return (
    <div className="opinions" style={theme}>
      {[...Array(11)].map((el: number, index) => (
        <div
          key={index}
          className={classNames({
            opinions__scale: true,
            'opinions__scale--mark blink': index === scale,
          })}
          role="button"
          onClick={handleClick(index)}
          tabIndex={0}
          onKeyPress={() => {}}
        >
          {index}
        </div>
      ))}
    </div>
  );
};

export default OpinionScale;
