import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

export const FoodStack = ({ navigation }) => {

  return (
    <Stack.Navigator>
      <Stack.Screen component={Home} name="Home" options={stackConf} />
    </Stack.Navigator>
  );
};
