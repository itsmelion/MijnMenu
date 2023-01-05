import type { TextProps } from './Text.types';

import * as S from './Text.styled';

export const Text = ({ children, title, ...props }: TextProps) => (
  <S.Text {...props}>
    {(!children && title) || children}
  </S.Text>
);
