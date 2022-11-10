import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SplashProps {
  name?: string;
}

export const Splash: React.FC<SplashProps> = ({ name }) => (
  <View>
    <SafeAreaView>

      <Text>{name}</Text>
    </SafeAreaView>
  </View>
);
