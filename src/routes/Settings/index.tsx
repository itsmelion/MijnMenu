import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MenuAdjustments } from './Settings';
import { config } from '../stack.config';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => (
  <Stack.Navigator screenOptions={config}>
    <Stack.Screen component={MenuAdjustments} name="MenuAdjustments" />
  </Stack.Navigator>
);
