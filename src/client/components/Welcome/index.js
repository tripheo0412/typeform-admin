// @flow
import * as React from 'react';
import Button from '../Button';
import './styles.scss';

type Theme = {
  [string]: string,
};

type WelcomeType = {
  theme?: Theme,
  text: string,
  imgUrl?: string,
};
export const Welcome = ({ theme, text, imgUrl }: WelcomeType) => (
  <div className="welcome" style={theme}>
    <div className="welcome__content">
      {imgUrl ? (
        <img src={imgUrl} alt="thumbnail" />
      ) : (
        <div className="welcome__picture">
          <div className="welcome__picture--icon"></div>
        </div>
      )}

      <div className="welcome__text">
        <h1>{text}</h1>
      </div>
    </div>
    <div className="welcome__button">
      <Button text="Start" theme={theme} handleClick={() => alert('clicked')} />
    </div>
  </div>
);

export default Welcome;
