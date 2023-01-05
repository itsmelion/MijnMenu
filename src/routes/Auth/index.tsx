import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';

import { Text } from 'components';

const Auth = createNativeStackNavigator();

const Comp = () => (
  <ScrollView>
    <Text>Dashboard</Text>
  </ScrollView>
);

export const AuthStack = () => (
  <Auth.Navigator>
    <Auth.Screen component={Comp} name="SignIn" options={{ animation: 'fade' }} />
    <Auth.Screen component={Comp} name="SignUp" options={{ animation: 'fade' }} />
    <Auth.Screen component={Comp} name="ForgotPassword" options={{ animation: 'fade' }} />
  </Auth.Navigator>
);
