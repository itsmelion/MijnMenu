import styled from '@emotion/native';
import { ViewProps } from 'react-native';

const StyledView = styled.View(({ theme }) => ({
  backgroundColor: '#FFF',
  padding: theme.rem(1),
  marginVertical: theme.rem(0.5),
  marginHorizontal: theme.rem(1),
  borderRadius: theme.rem(0.5),
  elevation: 1,
}));

export const Card: React.FC<ViewProps> = ({ children, ...props }) => (
  <StyledView {...props}>
    {children}
  </StyledView>
);
