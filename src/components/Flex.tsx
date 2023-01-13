import styled, { css } from '@emotion/native';
import _ from 'lodash';

enum FlexNames {
  none = '0 0 auto',
  flex = '1 1 0',
  nogrow = '0 1 auto',
  grow = '1 1 100%',
  initial = '0 1 auto',
  auto = '1 1 auto',
  stretch = '1 1 auto',
  noshrink = '1 0 auto',
}

const flexRules = (rule: FlexProps['flex'] = 'none') => {
  if (_.isString(rule)) {
    return css`flex: ${FlexNames[rule as unknown as keyof typeof FlexNames]};`;
  }

  if (_.isBoolean(rule)) {
    return css`flex: ${FlexNames.flex};`;
  }

  return css`
    flex: 1 1 ${rule}%;
    max-width: ${rule}%;
  `;
};

interface FlexProps {
  flex?: keyof typeof FlexNames | boolean;
}

export const Flex = styled.View<FlexProps>`
  ${({ flex }) => flexRules(flex)}
`;
