import styled from '@emotion/native';
import { ViewProps } from 'react-native';

const StyledView = styled.View({
  backgroundColor: '#fff',
  padding: 16,
  marginVertical: 6,
  marginHorizontal: 16,
  borderRadius: 8,
});

export const Card: React.FC<ViewProps> = ({ children, ...props }) => (
  <StyledView {...props}>
    {children}
  </StyledView>
);
