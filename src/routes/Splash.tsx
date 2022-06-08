import { Text } from 'react-native';

interface SplashProps {
  name?: string;
}

export const Splash: React.FC<SplashProps> = ({ name }) => <Text>{name}</Text>;
