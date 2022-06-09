import styled from '@emotion/native';

// export const Card = styled.ImageBackground`
//   flex: 0 1 auto;
//   justify-content: center;
//   align-items: center;
//   max-width: ${({ theme }) => theme.rem(32)};
//   paddingVertical: ${({ theme }) => theme.rem(1.5)};
//   paddingHorizontal: ${({ theme }) => theme.rem(2)};
//   width: ${({ theme }) => theme.toPx(responsiveWidth(90))};
// `;

export const Background = styled.View({
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: '100%',
  backgroundColor: 'rgba(74, 74, 74, 0.6)',
});
