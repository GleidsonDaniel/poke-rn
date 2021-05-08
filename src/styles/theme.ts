const colors = {
  gray14: '#363636',
  mediumGray: '#5e5e5e',
};

export const theme = {
  colors,
};

export type theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}
