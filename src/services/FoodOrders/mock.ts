import _ from 'lodash';

import type { Meal } from './order.types';

export const order: Meal = {
  get id() { return _.uniqueId(); },

  name: 'Mashed Potato',
  description: 'potatoes, but all smashed. Poured over a delicious sauce and meat balls.',

  images: {
    detail: {
      source: './assets/img/food-bowl/food-bowl.png',
      width: 512,
      height: 512,
      type: 'image/png',
    },
  },

  attributes: {
    halal: true,
    vegan: true,
    milk: true,
    nuts: true,
  },
};

export const orders = new Array(5).fill(order);
