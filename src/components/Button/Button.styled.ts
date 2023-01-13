import styled from '@emotion/native';

import type { ButtonProps } from './Button';

export const Pressable = styled.Pressable<ButtonProps>(({ theme, color, disabled }) => ({
  backgroundColor: disabled ? '#C4C4C4' : (color || theme.colors.brand),
  borderRadius: 6,
}));
