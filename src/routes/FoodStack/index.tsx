import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { config } from '../stack.config';
import { Order } from './Order';
import { OrdersList } from './OrdersList';

const Stack = createNativeStackNavigator();

export const FoodStack = () => (
  <Stack.Navigator screenOptions={config}>
    <Stack.Screen component={OrdersList} name="List" />
    <Stack.Screen component={Order} name="Order" />
  </Stack.Navigator>
);
