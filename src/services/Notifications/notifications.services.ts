// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import { useNavigation } from '@react-navigation/native';
// import { useEffect } from 'react';
// import { Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { CommonActions, NavigationProp } from '@react-navigation/native';
import log from 'loglevel';
import { useEffect } from 'react';
import { checkNotifications, requestNotifications } from 'react-native-permissions';

import * as deviceToken from './deviceToken';

export const askAllowNotification = function askAllowNotification() {
  log.debug('askAllowNotification');
  return checkNotifications()
    .then(async ({ status }) => {
      if (status === 'granted') return deviceToken.getToken();

      // eslint-disable-next-line promise/no-nesting
      return requestNotifications(['alert', 'sound'])
        .then(({ status: newStatus }) => {
          if (newStatus !== 'granted') return null;
          return deviceToken.getToken();
        });
    });
};

export function useNotificationsHandler(navigation: NavigationProp<Record<string, unknown>>) {
  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging()
      .onNotificationOpenedApp(remoteMessage => {
        log.debug(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );

        navigation.navigate('NotificationRouter', remoteMessage.data);
      });

    // Check whether an initial notification is available
    // eslint-disable-next-line promise/catch-or-return
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          log.debug(
            'Notification caused app to open from quit state:',
            remoteMessage.data,
          );

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                // { name: 'Main', params: { screen: 'Deck' } },
                {
                  name: 'NotificationRouter',
                  params: {
                    ...remoteMessage.data,
                    isInitialNotification: true,
                  },
                },
              ],
            }),
          );
        }
        return remoteMessage;
      });

    // Probably in Foreground.
    const unsub = messaging().onMessage(remoteMessage => {
      if (remoteMessage) {
        log.debug('onmessage', remoteMessage.data);
        navigation.navigate('NotificationRouter', remoteMessage.data);
      }
    });

    return () => unsub();
  }, [navigation]);

  return null;
}

// export const useIOSNotifications = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     askAllowNotification();
//     PushNotificationIOS
//       .addEventListener('notification', (notification) => {
//         const data = notification.getData();
//         const isClicked = data?.userInteraction === 1;
//         log.debug('isclicked', JSON.stringify(data, null, 2));
//         if (isClicked) navigation.replace('NotificationRouter', data);
//       });

//     return () => {
//       PushNotificationIOS.removeEventListener('notification');
//     };
//   }, [navigation]);

//   useEffect(() => {
//     PushNotificationIOS
//       .addEventListener('registrationError', (error) => {
//         console.warn('registrationError', error);
//         PushNotificationIOS.removeEventListener('notification');
//       });

//     return () => {
//       PushNotificationIOS.removeEventListener('registrationError');
//     };
//   }, []);

//   return null;
// };

// export const useAndroidNotifications = () => null;

// export const useNotifications = Platform.OS === 'android'
//   ? useAndroidNotifications
//   : useIOSNotifications;
