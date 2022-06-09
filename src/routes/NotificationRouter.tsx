import log from 'loglevel';

import { Splash } from './Splash';

export function NotificationRouter({ route }) {
  log.info('NotificationRouter', route.params);

  return <Splash name="Opening notification" />;
}
