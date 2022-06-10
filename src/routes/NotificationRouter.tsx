import log from 'loglevel';

import type { RootStackParamList } from './routes.types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Splash } from './Splash';

type NotificationsStackProps = NativeStackScreenProps<RootStackParamList, 'Notifications'>;

export function NotificationRouter({ route }: NotificationsStackProps) {
  log.info('NotificationRouter', route.params);

  return <Splash name="Opening notification" />;
}
