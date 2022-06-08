import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { deeplinks, Notifications } from 'services';

import type { RootStackParamList } from './routes.types';

import { FoodStack } from './FoodStack';
import { Splash } from './Splash';
import { config } from './stack.config';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Routes = ({ navigation }) => {
  const isAuthenticated = true;
  const isLoading = false;
  deeplinks.useListenDynamicLinks(navigation);
  Notifications.useNotificationsHandler(navigation);

  if (isLoading) return <Splash name="Checking credentials" />;

  return (
    <RootStack.Navigator
      initialRouteName="Main"
      mode="modal"
      options={config}>
      {isAuthenticated && <FoodStack.Screen component={FoodStack} name="Main" options={config} />}

      <RootStack.Screen
        component={NotificationRouter}
        name="NotificationRouter"
        options={config}
      />

      <RootStack.Screen component={Splash} name="Splash" options={config} />

      <RootStack.Screen
        component={Modal}
        name="Modal"
        options={{
          ...config,
          stackPresentation: 'transparentModal',
        }}
      />
    </RootStack.Navigator>
  );
};
