import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';

import { Text } from 'components';

import { config } from '../stack.config';

const Welcome = createNativeStackNavigator();

const Comp = () => (
  <ScrollView>
    <Text>Dashboard</Text>
  </ScrollView>
);

export const WelcomeStack = () => (
  <Welcome.Navigator screenOptions={{ ...config, presentation: 'fullScreenModal' }}>
    <Welcome.Screen component={Comp} name="Prefs" options={{ animation: 'slide_from_right' }} />
    <Welcome.Screen component={Comp} name="Conveniences" options={{ animation: 'slide_from_right' }} />
  </Welcome.Navigator>
);
