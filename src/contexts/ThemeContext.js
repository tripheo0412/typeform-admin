// @flow

import * as React from 'react';

type Context = {
  dark: boolean,
  toggle: () => void,
};

export const ThemeContext = React.createContext<Context>({
  dark: false,
  toggle: () => {},
});

type ThemeProps = {
  children: React.Node,
};

export function ThemeProvider({ children }: ThemeProps) {
  const [dark, setDark] = React.useState(false);

  const toggle = () => {
    setDark(!dark);
    localStorage.setItem('darkTheme', !dark ? 'true' : 'false');
  };

  // paints the app before it renders elements
  React.useLayoutEffect(() => {
    const darkTheme = localStorage.getItem('darkTheme');
    if (darkTheme === 'true') {
      setDark(true);
    } else {
      setDark(false);
    }
    // if state changes, repaints the app
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
