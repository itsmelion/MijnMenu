import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../routes.types';

const Stack = createNativeStackNavigator();

type FoodStack = NativeStackNavigationProp<
RootStackParamList,
'Food'
>;

export const FoodStack = ({ navigation }: FoodStackProps) => (
  <Stack.Navigator>
    <Stack.Screen component={Home} name="Home" options={stackConf} />
  </Stack.Navigator>
);
