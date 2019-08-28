// @flow
import * as React from 'react';
import classNames from 'classnames';
import './styles.scss';
import { FormContext } from '../../contexts/FormContext';

type Theme = {
  [string]: string,
};

type RatesType = {
  steps: number,
  order?: Number,
  theme?: Theme,
  handleScroll?: () => any,
};

export const Rates = ({ steps, theme, order, handleScroll }: RatesType) => {
  const [star, setStar] = React.useState(-1);
  const { dispatch } = React.useContext(FormContext);

  const firstUpdate = React.useRef(true);
  React.useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    }
    // dispatch({
    //   type: 'ADD__ANSWER',
    //   payload: { order, value: [star + 1] },
    // });
  }, [dispatch, order, star]);
  const handleClick = index => () => {
    setStar(index);
    if (handleScroll) {
      handleScroll();
    }
  };
  return (
    <div className="rating" style={theme}>
      {[...Array(steps)].map((rate: number, index) => (
        <div
          key={index}
          className="rating__items"
          role="button"
          onClick={handleClick(index)}
          tabIndex={0}
          onKeyPress={() => {}}
        >
          <div
            className={classNames({
              rating__icon: true,
              'rating__icon--mark blink': index <= star,
            })}
          ></div>
          <div className="rating__text">
            <div className="rating">{index + 1}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rates;
