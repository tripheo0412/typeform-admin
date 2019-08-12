// @flow
import React, { createContext, useCallback, useState } from 'react';
import type { Node } from 'react';

import { lightTheme, darkTheme } from '../theme';

export const ThemeContext = createContext<Object>();

type ThemeProps = {
  children: Node,
};

export function ThemeProvider({ children }: ThemeProps) {
  const [isDark, setIsDark] = useState(false);

  const root = document.documentElement;

  const setLightTheme = useCallback(() => {
    setIsDark(false);
    Object.keys(lightTheme).forEach(key => {
      if (root) root.style.setProperty(key, lightTheme[key]);
    });
  }, [root]);

  const setDarkTheme = useCallback(() => {
    setIsDark(true);
    Object.keys(darkTheme).forEach(key => {
      if (root) root.style.setProperty(key, darkTheme[key]);
    });
  }, [root]);

  const switchTheme = () => {
    if (isDark) {
      localStorage.setItem('theme', 'Light');
      setLightTheme();
    } else {
      localStorage.setItem('theme', 'Dark');
      setDarkTheme();
    }
  };

  React.useEffect(() => {
    switch (localStorage.getItem('theme')) {
      case 'Dark':
        setDarkTheme();
        break;
      default:
        setLightTheme();
    }
  }, [setDarkTheme, setLightTheme]);

  return (
    <ThemeContext.Provider value={{ isDark, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
