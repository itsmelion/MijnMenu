import { Platform } from 'react-native';

export const fonts = {
  Regular: Platform.OS === 'ios' ? 'Avenir' : 'sans-serif',
  Bold: Platform.OS === 'ios' ? 'Avenir' : 'sans-serif',
  Black: Platform.OS === 'ios' ? 'Avenir' : 'sans-serif',
  Italic: Platform.OS === 'ios' ? 'Avenir' : 'sans-serif',
  Light: Platform.OS === 'ios' ? 'Avenir' : 'sans-serif',
  Heading: Platform.OS === 'ios' ? 'Avenir' : 'sans-serif',
};

export type TFonts = keyof typeof fonts;

export interface IFonts {
  default: string,
  regular: string,
  normal: string,
  bold: string,
  black: string,
  italic: string,
  light: string,
  heading: string,
}

export const typography = {
  default: fonts.Regular,
  regular: fonts.Regular,
  normal: fonts.Regular,
  bold: fonts.Bold,
  black: fonts.Black,
  italic: fonts.Italic,
  light: fonts.Light,
  heading: fonts.Heading,
} as const;
