import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { deeplinks, Notifications } from 'services';

import log from 'loglevel';

import { User } from 'services';

import type { RootStackParamList } from './routes.types';

import { AuthStack } from './Auth';
import { DashboardStack } from './Dashboard';
import { FoodStack } from './FoodStack';
import { Modal } from './Modal/Modal';
import { NotificationRouter } from './NotificationRouter';
import { Splash } from './Splash';
import { config } from './stack.config';
import { WelcomeStack } from './Welcome';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export {
  FoodStack,
  Modal,
  NotificationRouter,
  Splash,
};

interface MainRouterProps {
  navigation: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>
}

export const Routes = ({ navigation }: MainRouterProps) => {
  const { data: user, isFetched } = User.useUser();
  log.debug(navigation);
  // deeplinks.useListenDynamicLinks(navigation);
  // Notifications.useNotificationsHandler(navigation);

  if (!isFetched) return <Splash name="Checking credentials" />;

  return (
    <RootStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={config}>
      {!user && <RootStack.Screen component={AuthStack} name="Auth" options={config} />}
      <RootStack.Screen component={WelcomeStack} name="Welcome" options={config} />

      {user && (
        <>
          <RootStack.Screen component={DashboardStack} name="Dashboard" options={config} />
          <RootStack.Screen component={FoodStack} name="Food" options={config} />
          <RootStack.Screen
            component={NotificationRouter}
            name="Notifications"
            options={config}
          />
        </>
      )}

      <RootStack.Screen component={Splash} name="Splash" options={config} />
      <RootStack.Screen
        component={Modal}
        name="Modal"
        options={{ ...config, presentation: 'fullScreenModal', animation: 'fade' }}
      />
    </RootStack.Navigator>
  );
};
