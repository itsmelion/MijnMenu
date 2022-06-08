import type { ColorScheme } from './colorScheme.types';
/* brand foundation */
const hue = 200;
const saturation = 100;
const lightness = 50;

export const light: ColorScheme = {
  hue,
  saturation,
  lightness,

  brand: `hsl(${hue}, ${saturation}, ${lightness})`,
  text1: `hsl(${hue}, ${saturation}, 10%)`,
  text2: `hsl(${hue}, 30%, 30%)`,
  surface1: `hsl(${hue}, 25%, 90%)`,
  surface2: `hsl(${hue}, 20%, 99%)`,
  surface3: `hsl(${hue}, 20%, 92%)`,
  surface4: `hsl(${hue}, 20%, 85%)`,
  surfaceshadow: `${hue}, 10%, 20%`,
  shadowstrength: 0.02,
};

export const dark: ColorScheme = {
  hue,
  saturation,
  lightness,

  brand: `hsl(${hue}, ${saturation / 2}, ${lightness / 1.5})`,
  text1: `hsl(${hue}, 15%, 85%)`,
  text2: `hsl(${hue}, 5%, 65%)`,
  surface1: `hsl(${hue}, 10%, 10%)`,
  surface2: `hsl(${hue}, 10%, 15%)`,
  surface3: `hsl(${hue}, 5%,  20%)`,
  surface4: `hsl(${hue}, 5%, 25%)`,
  surfaceshadow: `${hue}, 50%, 3%`,
  shadowstrength: 0.8,
};

/* dim */
export const dim: ColorScheme = {
  hue,
  saturation,
  lightness,

  brand: `hsl(${hue}, ${saturation / 1.25}, ${lightness / 1.25})`,
  text1: `hsl(${hue}, 15%, 75%)`,
  text2: `hsl(${hue}, 10%, 61%)`,
  surface1: `hsl(${hue}, 10%, 20%)`,
  surface2: `hsl(${hue}, 10%, 25%)`,
  surface3: `hsl(${hue}, 5%,  30%)`,
  surface4: `hsl(${hue}, 5%, 35%)`,
  surfaceshadow: `${hue}, 30%, 13%`,
  shadowstrength: 0.2,
};

// RN Shadow
// {
//   shadowOffset: {
//     width: shadowOffsetWidth,
//     height: -shadowOffsetHeight
//   },
//   shadowOpacity,
//   shadowRadius
// }
