import styled from '@emotion/native';
import { Theme } from '@emotion/react';
import _ from 'lodash';

import type { TextProps } from './Text.types';

const defaultFont = ({ font, bold, theme }: TextProps & { theme: Theme }) => {
  if (bold) return theme.fonts.bold;
  if (font === 'Light') return theme.fonts.light;
  if (font === 'Bold') return theme.fonts.bold;
  if (font === 'Black') return theme.fonts.black;
  if (font === 'Heading') return theme.fonts.heading;
  if (font === 'Light') return theme.fonts.light;
  return theme.fonts.default;
};

const sizing = ({ size, rem, theme }: TextProps & { theme: Theme }): number => {
  if (!size || rem) return theme.rem(rem || 1, true) as number;

  if (_.isNumber(size) && _.isInteger(size)) {
    return size;
  }

  switch (size.toUpperCase()) {
    case 'XS': return theme.sizes.XS;
    case 'S': return theme.sizes.S;
    case 'M': return theme.sizes.M;
    case 'L': return theme.sizes.L;
    case 'XL': return theme.sizes.XL;
    default: return theme.sizes.M;
  }
};

export const Text = styled.Text<TextProps>(({
  theme, font, bold, color, center, size, rem,
}) => ({
  fontSize: sizing({ size, rem, theme }),
  fontFamily: defaultFont({ font, bold, theme }),
  color,
  textAlign: center ? 'center' : 'left',
}));
