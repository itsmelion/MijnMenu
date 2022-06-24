import _ from 'lodash';

import { light as colors } from './colors';
import { typography } from './fonts';
import * as utils from './utils';

// type ConfigLike = ReturnType<typeof generateTheme>;

const baseFontSize = 16;
const sizes = {
  baseFontSize, // 16
  XS: baseFontSize * 0.75, // 12
  S: baseFontSize * 0.875, // 14
  M: baseFontSize, // 16
  L: baseFontSize * 2, // 32
  XL: baseFontSize * 2.8, // 48
};

const defaultConfig = {
  baseFontSize,
  sizes,
  fontSize: {
    get XS() { return utils.px(sizes.XS); },
    get S() { return utils.px(sizes.S); },
    get M() { return utils.px(sizes.M); },
    get L() { return utils.px(sizes.L); },
    get XL() { return utils.px(sizes.XL); },
  },
  colors,
  margins: {
    background: {
      horizontal: 1.5,
    },
    matchListItem: {
      horizontal: 0,
    },
  },
};

// type ThemeShape = Partial<typeof defaultConfig> & { colors: ColorScheme };

export function generateTheme(config: Partial<typeof defaultConfig> = defaultConfig) {
  const output = _.merge(config, defaultConfig);

  return {
    fonts: typography,
    ...utils,
    ...output,
  } as const;
}

export const theme = generateTheme();
