const flexNames = {
  none: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
  },
  flex: {
    flex: 1,
  },
  nogrow: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  grow: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%',
  },
  initial: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 'auto',
  },
  noshrink: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 'auto',
  },
  auto: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  stretch: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
};
export type FlexRule = keyof typeof flexNames;
export const flexRules = (rule: FlexRule = 'none') => flexNames[rule];
