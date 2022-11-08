import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { deeplinks, Notifications } from 'services';

import type { RootStackParamList } from './routes.types';

import { FoodStack } from './FoodStack';
import { Modal } from './Modal/Modal';
import { NotificationRouter } from './NotificationRouter';
import { Splash } from './Splash';
import { config } from './stack.config';
import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import log from 'loglevel';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export {
  FoodStack,
  Modal,
  NotificationRouter,
  Splash,
};

interface Routes {
  navigation: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>
}

export const Routes = ({ navigation }: Routes) => {
  const isAuthenticated = true;
  const isLoading = false;
  log.debug(navigation);
  // deeplinks.useListenDynamicLinks(navigation);
  // Notifications.useNotificationsHandler(navigation);

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
