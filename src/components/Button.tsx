import styled from '@emotion/native';
import { Theme } from '@emotion/react';
import { useCallback, useState, memo } from 'react';
import {
  PressableProps, LayoutChangeEvent, Pressable, View, ActivityIndicator, StyleSheet,
} from 'react-native';

import { Center } from './Center';
import { Text } from './Text/Text';

interface ButtonProps extends Omit<PressableProps, 'children'>{
  color?: string;
  title?: string;
  disabled?: boolean;
  loading?: boolean;
  center?: boolean;
  children?: string;
}

export const Button: React.FC<ButtonProps> = memo<ButtonProps>(({
  children = null,
  color = '#FF4611',
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
    <Pressable disabled={off} {...props} pointerEvents="box-only">
      <View style={{ backgroundColor: disabled ? '#C4C4C4' : color }}>
        <StyledText
          bold
          center
          computedPadding={computedPad}
          loading={loading}
          onLayout={onLayout}>
          {title || children}
        </StyledText>

        {loading && <ActivityIndicator color="white" style={StyleSheet.absoluteFill} />}
      </View>
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
  paddingVertical: theme.em(0.3, computedPadding),
  paddingHorizontal: theme.em(1.5, theme.sizes.M),
  minWidth: theme.rem(14),
  opacity: loading ? 0 : 1,
}));
