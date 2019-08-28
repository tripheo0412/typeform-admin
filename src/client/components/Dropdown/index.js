// @flow
import * as React from 'react';
import classNames from 'classnames';
import { useOnClickOutside } from '../../custom-hooks/useOnClickOutside';
import { FormContext } from '../../contexts/FormContext';
import './styles.scss';

type Theme = {
  [string]: string,
};

type DropdownType = {
  options: Array<string>,
  theme?: Theme,
  order?: Number,
  handleScroll?: () => any,
};

export const Dropdown = ({
  options,
  theme,
  handleScroll,
  order,
}: DropdownType) => {
  const { dispatch } = React.useContext(FormContext);
  const [toggle, setToggle] = React.useState(false);
  const [value, setValue] = React.useState('');
  const ref = React.useRef(null);

  const firstUpdate = React.useRef(true);
  React.useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    }
    // dispatch({
    //   type: 'ADD__ANSWER',
    //   payload: { order, value: [value] },
    // });
  }, [dispatch, order, value]);

  useOnClickOutside(ref, () => setToggle(false));
  const handleToggle = () => {
    if (value.length > 1) {
      setToggle(!toggle);
      setValue('');
    }
    setToggle(!toggle);
  };

  const handleClick = index => {
    setValue(options[index]);
    setToggle(!toggle);
    if (handleScroll) {
      handleScroll();
    }
  };

  const handleChange = (e: { target: HTMLInputElement }) =>
    setValue(e.target.value);

  const filterOptions = options.filter(option => option.includes(value));

  return (
    <div className="dropdown fieldset" style={theme}>
      <input
        variant="text"
        theme={theme}
        type="text"
        placeholder="type or select an option"
        value={value}
        onChange={handleChange}
        onFocus={handleToggle}
      />

      <div
        className="dropdown__icon"
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyPress={() => {}}
      >
        <div
          className={classNames({
            'dropdown__icon--close': value.length > 1,
            'dropdown__icon--check': value.length < 1,
          })}
        ></div>
      </div>
      {toggle && (
        <div className="dropdown__select" ref={ref}>
          {filterOptions.map((option, index) => (
            <div
              className="dropdown__option"
              role="button"
              tabIndex={0}
              onKeyPress={() => {}}
              onClick={() => handleClick(index)}
            >
              <div className="dropdown__option--text">{option}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
