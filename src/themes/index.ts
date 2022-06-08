import type { Theme } from '@emotion/react';
import type { Theme as RouterTheme } from '@react-navigation/native';

import { light as theme } from './colors';

export const routerTheme: RouterTheme = {
  dark: false,
  colors: {
    primary: theme.brand,
    background: theme.surface1,
    card: theme.surface2,
    text: theme.text1,
    border: theme.surface2,
    notification: theme.surface4,
  },
};

export const defaultTheme: Theme = theme;
