import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';

import { Text } from 'components';

import { config } from '../stack.config';
import { Feed } from './Feed';

const Stack = createNativeStackNavigator();

const Comp = () => (
  <ScrollView>
    <Text>Dashboard</Text>
  </ScrollView>
);

export const DashboardStack = () => (
  <Stack.Navigator screenOptions={config}>
    <Stack.Screen component={Feed} name="Feed" />
    <Stack.Screen component={Comp} name="Settings" />
  </Stack.Navigator>
);
