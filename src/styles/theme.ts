const colors = {
  cyan: '#05bcfa',
  mediumGray: '#979797',
  salmone: '#FA5961',
  brown: '#6c2e00',
};

export const theme = {
  colors,
};

export type theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}
