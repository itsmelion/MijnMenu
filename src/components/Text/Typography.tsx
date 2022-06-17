import { Text } from './Text';

const HeadersSetup = {
  font: 'Heading',
  accent: true,
} as const;

interface HeadlineProps {
  children: React.ReactNode;
}
type HeadlineComponent = React.FC<HeadlineProps>;

export const Headline: HeadlineComponent = (props) => (
  <Text {...HeadersSetup} {...props} size="XL" />
);
export const H1 = Headline;
export const XL = Headline;
export const Display = Headline;

export const Title: HeadlineComponent = (props) => <Text {...HeadersSetup} {...props} size="L" />;
export const H2 = Title;
export const L = Title;

export const H3: HeadlineComponent = (props) => <Text {...HeadersSetup} {...props} size="M" />;
export const M = H3;

export const H4: HeadlineComponent = (props) => <Text {...HeadersSetup} {...props} size="S" />;
export const S = H4;

export const H5: HeadlineComponent = (props) => <Text {...HeadersSetup} {...props} size="XS" />;
export const XS = H5;
