// @flow
import * as React from 'react';
import './styles.scss';
import { FormContext } from '../../contexts/FormContext';

type Theme = {
  [string]: string,
};

type FieldsetType = {
  type?: string,
  theme?: Theme,
  name?: string,
  variant?: string,
  handleFocus?: () => any,
  order?: Number,
};

export const Fieldset = ({
  type,
  theme,
  variant,
  name,
  order,
  handleFocus,
}: FieldsetType) => {
  const [inputValue, setInputValue] = React.useState('');
  // const { dispatch } = React.useContext(FormContext);
  const handleChange = (e: { target: HTMLInputElement }) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="fieldset" style={theme}>
      {variant === 'longtext' ? (
        <textarea
          variant={variant}
          type={inputValue}
          placeholder="type your answer"
          value={inputValue}
          name={name}
          onChange={handleChange}
          onBlur={
            () => {}
            // dispatch({
            //   type: 'ADD__ANSWER',
            //   payload: { order, value: [inputValue] },
            // })
          }
        />
      ) : (
        <input
          variant={variant}
          type={type}
          placeholder={
            variant === 'email' ? 'type your email' : 'type your answer'
          }
          value={inputValue}
          name={name}
          onChange={handleChange}
          onBlur={
            () => {}
            // dispatch({
            //   type: 'ADD__ANSWER',
            //   payload: { order, value: [inputValue] },
            // })
          }
          onFocus={handleFocus}
        />
      )}
    </div>
  );
};

export default Fieldset;
