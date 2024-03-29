import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feed } from './Feed';
import { config } from '../stack.config';

const Stack = createNativeStackNavigator();

export const DashboardStack = () => (
  <Stack.Navigator screenOptions={config}>
    <Stack.Screen component={Feed} name="Feed" />
  </Stack.Navigator>
);
