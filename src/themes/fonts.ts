export enum fonts {
  Regular = 'normal',
  Bold = 'normal',
  Black = 'normal',
  Italic = 'normal',
  Light = 'normal',
  Heading = 'normal',
}

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
