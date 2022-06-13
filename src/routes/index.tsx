import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { deeplinks, Notifications } from 'services';

import type { RootStackParamList } from './routes.types';
import type { NavigationProp } from '@react-navigation/native';

import { FoodStack } from './FoodStack';
import { Modal } from './Modal/Modal';
import { NotificationRouter } from './NotificationRouter';
import { Splash } from './Splash';
import { config } from './stack.config';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Routes = ({ navigation }: { navigation: NavigationProp<Record<string, unknown>>}) => {
  const isAuthenticated = true;
  const isLoading = false;
  deeplinks.useListenDynamicLinks(navigation);
  Notifications.useNotificationsHandler(navigation);

  if (isLoading) return <Splash name="Checking credentials" />;

  return (
    <RootStack.Navigator
      initialRouteName="Food"
      screenOptions={config}>
      {isAuthenticated && <RootStack.Screen component={FoodStack} name="Food" options={config} />}

      <RootStack.Screen
        component={NotificationRouter}
        name="Notifications"
        options={config}
      />

      <RootStack.Screen component={Splash} name="Splash" options={config} />

      <RootStack.Screen
        component={Modal}
        name="Modal"
        options={{ ...config, presentation: 'modal' }}
      />
    </RootStack.Navigator>
  );
};
