import _ from 'lodash';

import type { Theme } from '@emotion/react';

export function px(unit: number) { return `${unit}px`; }

export function em(base = 1, fontSize = 16, asNumber = false) {
  const rounded = _.round(fontSize * base, 2);
  if (asNumber) return rounded;
  return px(rounded);
}

export function rem(this: Theme, base = 1, asNumber = false) {
  return this.em(this.sizes.M, base, asNumber);
}

export const toPx = (unit: number | string) => {
  if (!unit && unit !== 0) return undefined;
  if (_.isString(unit)) return unit;
  if (unit === 0) return unit;
  return `${unit}px`;
};
