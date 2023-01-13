import styled from '@emotion/native';
import { Theme } from '@emotion/react';

import { useCallback, useState, memo } from 'react';
import {
  PressableProps, LayoutChangeEvent, ActivityIndicator, StyleSheet, ColorValue,
} from 'react-native';

import { Center } from '../Center';
import { Flex } from '../Flex';
import { Text } from '../Text/Text';
import { Pressable } from './Button.styled';

export interface ButtonProps extends PressableProps {
  color?: ColorValue;
  title?: string;
  disabled?: boolean;
  loading?: boolean;
  center?: boolean;
}

export const Button: React.FC<ButtonProps> = memo<ButtonProps>(({
  children = null,
  title = '',
  disabled = false,
  loading = false,
  center = false,
  ...props
}) => {
  const off = disabled || loading;
  const [computedPad, setPadding] = useState(10);

  const onLayout = useCallback(({
    nativeEvent: { layout: { width, height } },
  }: LayoutChangeEvent) => {
    if (width / height > 3.8) {
      const cpad = (width / 3.75) * 0.75;
      if (computedPad !== cpad) setPadding(cpad);
    }
  }, [computedPad]);

  const inCenter = useCallback((Comp: React.FC) => {
    if (!center) return <Comp />;
    return <Center><Comp /></Center>;
  }, [center]);

  return inCenter(() => (
    <Pressable
      disabled={off}
      {...props}
      pointerEvents="box-only">
      {children || (
        <Flex>
          <StyledText
            bold
            center
            computedPadding={computedPad}
            loading={loading}
            onLayout={onLayout}>
            {title}
          </StyledText>

          {loading && <ActivityIndicator color="white" style={StyleSheet.absoluteFill} />}
        </Flex>
      )}
    </Pressable>
  ));
});

interface ButtonTextProps {
  theme?: Theme;
  computedPadding: number;
  loading?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
}

export const StyledText = styled(Text)<ButtonTextProps>(({ theme, computedPadding, loading }) => ({
  color: 'white',
  paddingVertical: theme.em(0.5, computedPadding),
  paddingHorizontal: theme.em(1, theme.sizes.M),
  opacity: loading ? 0 : 1,
}));
