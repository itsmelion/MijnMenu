import type { Theme as RouterTheme } from '@react-navigation/native';

import { light } from './colors';
import { theme } from './theme';

export const routerTheme: RouterTheme = {
  dark: false,
  colors: {
    primary: light.brand,
    background: light.surface1,
    card: light.surface2,
    text: light.text1,
    border: light.surface2,
    notification: light.surface4,
  },
};

export const defaultTheme = theme;
type themeType = typeof theme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends themeType {}
}
