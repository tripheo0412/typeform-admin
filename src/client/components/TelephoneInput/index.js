/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
// @flow
import * as React from 'react';
import { allCountries } from './allCountries';
import './styles.scss';
import { FormContext } from '../../contexts/FormContext';

type Theme = {
  [string]: string,
};

export const TelephoneInput = ({
  theme,
  order,
}: {
  theme: Theme,
  order?: Number,
}) => {
  const [inputValue, setInputValue] = React.useState('');
  const [country, setCountry] = React.useState({
    id: '38',
    name: 'finland',
    code: '358',
    format: '041 2345678',
    flag: 'iconFn',
  });
  const [filter, setFilter] = React.useState('');
  const [toggle, setToggle] = React.useState(false);

  const { dispatch } = React.useContext(FormContext);

  const countries = allCountries.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleToggle = () => setToggle(true);

  const handleValueChange = (e: { target: HTMLInputElement }) => {
    setInputValue(e.target.value);
  };

  const handleSearchChange = (e: { target: HTMLInputElement }) => {
    setFilter(e.target.value);
  };

  const handleClick = item => () => {
    setCountry(item);
    setToggle(false);
  };
  return (
    <div className="telephone" style={theme}>
      <div
        className="telephone__flag"
        role="button"
        onKeyPress={() => {}}
        tabIndex={0}
        onClick={handleToggle}
      >
        <div className="telephone__flag--icon">
          <img
            src={require(`../../assets/icons/flags/${country.flag}.svg`)}
            alt="flag"
          />
        </div>
        <div className="telephone__flag--toggle"></div>
      </div>
      <div className="fieldset">
        <input
          type="number"
          placeholder={country.format}
          value={inputValue}
          onChange={handleValueChange}
          onBlur={
            () => {}
            // dispatch({
            //   type: 'ADD__ANSWER',
            //   payload: { order, value: [`+${country.code} ${inputValue}`] },
            // })
          }
        />
      </div>

      {toggle && (
        <div className="telephone__dropdown">
          <div className="dropdown__input ">
            <div className="fieldset">
              <input
                type="text"
                placeholder="Search countries"
                onChange={handleSearchChange}
                value={filter}
              />
            </div>
          </div>
          <div className="dropdown__list">
            {countries.map(item => (
              <div
                key={item.id}
                className="dropdown__tab"
                role="button"
                tabIndex={0}
                onKeyPress={() => {}}
                onClick={handleClick(item)}
              >
                <div>
                  <img
                    src={require(`../../assets/icons/flags/${item.flag}.svg`)}
                    alt="flag"
                  />
                  <span>{item.name}</span>
                </div>
                <div>+{item.code}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TelephoneInput;
