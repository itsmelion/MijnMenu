import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Order } from './Order';
import { OrdersList } from './OrdersList';

const Stack = createNativeStackNavigator();

export const FoodStack = () => (
  <Stack.Navigator>
    <Stack.Screen component={OrdersList} name="List" />
    <Stack.Screen component={Order} name="Order" />
  </Stack.Navigator>
);
