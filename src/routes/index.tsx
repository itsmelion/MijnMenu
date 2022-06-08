import { useEffect } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { deeplinks, Notifications } from 'services';

import { FoodStack } from './FoodStack';
import { config } from './stack.config';

const RootStack = createNativeStackNavigator();

export const Routes = ({ navigation }) => {
  const isAuthenticated = true;
  const isLoading = false;
  deeplinks.useListenDynamicLinks(navigation);
  Notifications.useNotificationsHandler(navigation);
  const { isConnected } = useNetInfo();

  useEffect(() => {
    if (!isConnected) navigation.navigate('Offline');
  }, [isConnected, navigation]);


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
