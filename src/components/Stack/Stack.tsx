import styled from '@emotion/native';

import { align as resolveAlignment, Alignments } from './align';
import { flexRules, FlexRule } from './flex';

type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';

interface StackProps {
  align?: Alignments,
  flex?: FlexRule,
  direction?: Direction,
  gap?: number;
}

export const Stack = styled.View<StackProps>(({ align, flex }) => ({
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',
  flexDirection: 'row',
  ...resolveAlignment(align),
  ...flexRules(flex),
}));

export const VStack = styled.View<Omit<StackProps, 'direction'>>(({ align, flex, gap = 6 }) => ({
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',
  flexDirection: 'column',
  gap,
  ...resolveAlignment(align),
  ...flexRules(flex),
}));

export const HStack = styled.View<Omit<StackProps, 'direction'>>(({ align, flex, gap = 6 }) => ({
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',
  flexDirection: 'row',
  gap,
  ...resolveAlignment(align),
  ...flexRules(flex),
}));
