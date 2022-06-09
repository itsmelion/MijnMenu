import type { TFonts } from '../../themes/fonts';
import type { Theme } from '@emotion/react';
import type { TextProps as RNTextProps } from 'react-native';

type sizes = 'M'|'S'|'XS'|'L'|'XL';

export interface TextProps extends RNTextProps {
  title?: string,
  size?: sizes,
  font?: TFonts,
  bold?: boolean,
  color?: string,
  rem?: number,
  accent?: boolean,
  center?: boolean,
  children?: React.ReactNode | string,
  theme?: Theme;
}
