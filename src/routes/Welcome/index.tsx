import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Conveniences } from './Conveniences';
import { GetItDone } from './GetItDone';
import { MadeForYou } from './MadeForYou';
import { config } from '../stack.config';

const Welcome = createNativeStackNavigator();

export const WelcomeStack = () => (
  <Welcome.Navigator screenOptions={{ ...config, presentation: 'fullScreenModal' }}>
    <Welcome.Screen component={GetItDone} name="Prefs" options={{ animation: 'slide_from_right' }} />
    <Welcome.Screen component={MadeForYou} name="MadeForYou" options={{ animation: 'slide_from_right' }} />
    <Welcome.Screen component={Conveniences} name="Conveniences" options={{ animation: 'slide_from_right' }} />
  </Welcome.Navigator>
);
