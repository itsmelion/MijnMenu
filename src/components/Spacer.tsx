import styled from '@emotion/native';

export const Spacer = styled.View<{ h?: number, v?: number }>(({ h = 0, v = 0, theme }) => ({
  marginVertical: theme.rem(v),
  marginHorizontal: theme.rem(h),
}));
