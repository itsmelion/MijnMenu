export enum fonts {
  Regular = 'Foco-Regular',
  Bold = 'Foco-Bold',
  Black = 'FocoBlack-Regular',
  Italic = 'Foco-Italic',
  Light = 'FocoLight-Regular',
  Heading = 'JoyfulSoftness',
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
