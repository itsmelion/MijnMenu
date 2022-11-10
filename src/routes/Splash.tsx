import { useNavigation } from '@react-navigation/native';
import { Button } from 'components';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SplashProps {
  name?: string;
}

export const Splash: React.FC<SplashProps> = ({ name }) => <Text>{name}</Text>;
export const Falafel = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Falafel</Text>
      <Button
        onPress={() => navigation.navigate('Falafel')}
        title="Go to Falafel"
      />

      <Button
        onPress={() => navigation.navigate('Splash')}
        title="Go to Splash"
      />
    </SafeAreaView>
  )
};
