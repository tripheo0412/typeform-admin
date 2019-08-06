// @flow
import * as React from 'react';
import IconDotMenu from '../IconDotMenu';
import DropDown from '../DropDownMenu';

import './styles.scss';

export const options: Array<{
  title: string,
  handleClick: () => any,
}> = [
  {
    title: 'Edit',
    handleClick: () => alert('editing'),
  },
  {
    title: 'Preview',
    handleClick: () => alert('Preview'),
  },
  {
    title: 'Result',
    handleClick: () => alert('Result'),
  },
  {
    title: 'Rename',
    handleClick: () => alert('Rename'),
  },
  {
    title: 'Deplicate',
    handleClick: () => alert('Deplicate'),
  },
  {
    title: 'Delete',
    handleClick: () => alert('Delete'),
  },
];

export type ThemeProps = {
  link: string,
  isSample?: boolean,
  responses?: number,
  themeName?: string,
  textColor?: string,
  themeBackColor?: string,
  themeBackImg?: string,
  themeTitle?: string,
};

export type TempProps = {
  tempClick: () => any,
};

export const Template = ({ tempClick }: TempProps): React.Node => (
  // TODO: change temoClick to link in <Link />
  <div
    className="cardbutton"
    onClick={() => tempClick}
    onKeyPress={() => {}}
    role="button"
    tabIndex={0}
  >
    <div className="cardbutton__items">New Template</div>
  </div>
);

export const Theme = ({
  link,
  isSample,
  responses,
  themeName,
  textColor,
  themeBackColor,
  themeBackImg,
  themeTitle,
}: ThemeProps): React.Node => {
  const styleTheme = {
    backgroundColor: themeBackColor,
    backgroundImage: themeBackImg,
  };
  return (
    <div className="cardbutton" draggable>
      <div className="cardbutton__body" style={styleTheme}>
        {/* TODO: change a to Links */}
        <a
          className="cardbutton__link"
          href={link}
          role="button"
          tabIndex="0"
          onKeyPress={() => {}}
        >
          {isSample ? (
            <>
              <span>Question</span>
              <span>Answer</span>
              <span
                style={{
                  backgroundColor: textColor,
                  marginTop: '5px',
                  borderRadius: '5px',
                  height: '15px',
                  width: '35px',
                }}
              ></span>
            </>
          ) : (
            themeTitle
          )}
        </a>
        <div className="cardbutton__footer">
          {themeName ||
            (typeof responses === 'number' && responses > 0 ? (
              <button type="button" className="cardbutton__footer__button">
                <span>{`${responses} responses`}</span>
              </button>
            ) : (
              'No responses'
            ))}
          <IconDotMenu>
            <DropDown
              options={
                isSample
                  ? [{ title: 'Costomise', handleClick: () => null }]
                  : options
              }
            />
          </IconDotMenu>
        </div>
      </div>
    </div>
  );
};

Theme.defaultProps = {
  themeBackColor: '#e77a7a',
  textColor: 'white',
};
export default Template;
