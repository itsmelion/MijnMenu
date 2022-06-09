import styled, { css } from '@emotion/native';
import { ViewProps } from 'react-native';

interface CenterProps extends ViewProps {
  isFlex?: boolean,
}

const View = styled.View<CenterProps>`
  justify-content: center;
  align-items: center;
  ${({ isFlex }) => (isFlex ? css`flex: 1 1 0;` : css`flex: 0 0 auto;`)}
`;

export const Center: React.FC<CenterProps> = (props) => (
  <View {...props} />
);
