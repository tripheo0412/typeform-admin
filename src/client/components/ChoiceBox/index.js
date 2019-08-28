// @flow
import * as React from 'react';
import ChoiceTab from '../ChoiceTab';
import './styles.scss';
import { FormContext } from '../../contexts/FormContext';

type Theme = {
  [string]: string,
};
type ChoiceBoxType = { choices: Array<string>, order?: Number, theme?: Theme };

export const ChoiceBox = ({ choices, theme, order }: ChoiceBoxType) => {
  const { dispatch } = React.useContext(FormContext);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const tabs = alphabet.slice(0, choices.length);

  const initialState = () => {
    const obj = {};
    for (let i = 0; i < choices.length; i += 1)
      if (choices[i] !== undefined) obj[choices[i]] = false;
    return obj;
  };

  const [state, setState] = React.useState(initialState());

  const firstUpdate = React.useRef(true);
  const handleCheck = (index: string) => () => {
    setState({
      ...state,
      [index]: !state[index],
    });
  };

  React.useLayoutEffect(() => {
    const values = () => {
      const arr = [];
      const keys = Object.keys(state);
      keys.forEach(el => {
        if (state[el] === true) {
          arr.push(el);
        }
      });
      return arr;
    };
    if (firstUpdate.current) {
      firstUpdate.current = false;
    }
    // dispatch({
    //   type: 'ADD__ANSWER',
    //   payload: { order, value: values() },
    // });
  }, [dispatch, order, state]);
  return (
    <div className="choicebox" data-theme={theme}>
      <p>Choose as many as you like</p>
      {choices.map((text, index) => (
        <ChoiceTab
          key={text}
          checked={state[choices[index]]}
          handleToggle={handleCheck(choices[index])}
          theme={theme}
          letter={tabs[index]}
          text={text}
        />
      ))}
    </div>
  );
};
export default ChoiceBox;
