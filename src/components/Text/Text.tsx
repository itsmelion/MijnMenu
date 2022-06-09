import { memo } from 'react';

import type { TextProps } from './Text.types';

import * as S from './Text.styled';

export const Text = memo(({ children, title, ...props }: TextProps) => (
  <S.Text {...props}>
    {(!children && title) || children}
  </S.Text>
));
