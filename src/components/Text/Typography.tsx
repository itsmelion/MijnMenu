import { Text } from './Text';

const HeadersSetup = {
  font: 'Heading',
  accent: true,
} as const;

export const Headline: React.FC = (props) => <Text {...HeadersSetup} {...props} size="XL" />;
export const H1 = Headline;
export const XL = Headline;
export const Display = Headline;

export const Title: React.FC = (props) => <Text {...HeadersSetup} {...props} size="L" />;
export const H2 = Title;
export const L = Title;

export const H3: React.FC = (props) => <Text {...HeadersSetup} {...props} size="M" />;
export const M = H3;

export const H4: React.FC = (props) => <Text {...HeadersSetup} {...props} size="S" />;
export const S = H4;

export const H5: React.FC = (props) => <Text {...HeadersSetup} {...props} size="XS" />;
export const XS = H5;
