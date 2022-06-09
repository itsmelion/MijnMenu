import log from 'loglevel';

import { Splash } from './Splash';

export function NotificationRouter({ navigation, route }) {
  log.info('NotificationRouter', route.params);

  return <Splash name="Opening notification" />;
}
