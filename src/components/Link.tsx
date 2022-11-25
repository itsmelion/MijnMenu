import styled from '@emotion/native';
import { ButtonProps } from 'react-native';

import { Text } from './Text/Text';

const LinkStyles = styled(Text)<Record<string, unknown>>(({ color, font, theme }) => ({
  fontWeight: 'bold',
  fontSize: theme.sizes.M,
  fontFamily: font === 'Heading'
    ? theme.fonts.heading
    : theme.fonts.default,
  color: color || '#2222EE',
}));

export const Link: React.FC<ButtonProps & {
  children: React.ReactNode;
  title?: string;
  disabled?: boolean;
  color?: string;
}> = ({
  children, title, disabled, onPress, ...props
}) => {
  const handlePress = disabled ? () => null : onPress;

  return (
    <LinkStyles onPress={handlePress} {...props}>
      {title || children}
    </LinkStyles>
  );
};
