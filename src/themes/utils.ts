import _ from 'lodash';

import type { Theme } from '@emotion/react';

export function px(unit: number) { return `${unit}px`; }

export function em(base = 1, fontSize = 16) {
  const rounded = _.round(fontSize * base, 2);
  return rounded;
}

export function rem(this: Theme, base = 1) {
  return em(this.sizes.M, base);
}

export const toPx = (unit: number | string) => {
  if (!unit && unit !== 0) return undefined;
  if (_.isString(unit)) return unit;
  if (unit === 0) return unit;
  return `${unit}px`;
};

export const utils = {
  em, rem,
};
