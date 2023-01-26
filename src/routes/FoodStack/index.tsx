import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Order } from './Order';
import { OrdersList } from './OrdersList';
import { config } from '../stack.config';

const Stack = createNativeStackNavigator();

export const FoodStack = () => (
  <Stack.Navigator screenOptions={config}>
    <Stack.Screen component={OrdersList} name="List" />
    <Stack.Screen component={Order} name="Order" />
  </Stack.Navigator>
);
