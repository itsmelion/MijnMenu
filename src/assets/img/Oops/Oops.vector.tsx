import { ColorValue } from 'react-native';
import Svg, { SvgProps } from 'react-native-svg';

type OopsType = React.FC<SvgProps> & {
  fill?: ColorValue;
};

export const Oops: OopsType = ({ style, ...props }) => (
  <Svg
    style={[style, { aspectRatio: 1 }]}
    viewBox="0 0 149 140"
    x="0"
    y="0"
    {...props}
  />
);
