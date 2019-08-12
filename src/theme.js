// @flow

const light = Object.freeze({
  primary: '#dd7f45',
  secondary: '#a1a1a1',
  background: '#fff',
  backgroundSecondary: '#f4f4f4',
  border: '#e5e5e5',
  textPrimary: '#000',
});

const dark = Object.freeze({
  primary: '#37c095',
  secondary: '#fff',
  background: '#232323',
  backgroundSecondary: '#303030',
  border: '#dadada',
  textPrimary: '#fff',
});

const borderSecondary = '#bdbdbd';
const colorDanger = '#d24848';
const colorDuplicate = '#307e7e';
const textSecondary = '#a1a1a1';

const theme = themeType =>
  Object.freeze({
    '--color-primary': themeType.primary,
    '--color-secondary': themeType.secondary,
    '--color-background': themeType.background,
    '--color-background-secondary': themeType.backgroundSecondary,
    '--color-border': themeType.border,
    '--color-text-primary': themeType.textPrimary,
    '--color-text-secondary': textSecondary,
    '--color-danger': colorDanger,
    '--color-duplicate': colorDuplicate,
    '--color-border-secondary': borderSecondary,
  });

export const lightTheme = theme(light);
export const darkTheme = theme(dark);
