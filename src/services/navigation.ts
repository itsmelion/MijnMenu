import { StackActions, createNavigationContainerRef } from '@react-navigation/native';
import log from 'loglevel';
import { createRef } from 'react';

export const navigationRef = createNavigationContainerRef();
export const isReadyRef = createRef();

export const navigate = (...args: Parameters<typeof navigationRef.navigate>) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args);
  } else {
    log.warn('ROUTER NOT MOUNTED');
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

export function push(...args: Parameters<typeof navigationRef.navigate>) {
  if (navigationRef.isReady()) {
    // Perform navigation if the app has mounted
    navigationRef.dispatch(StackActions.push(...args));
  } else {
    log.warn('ROUTER NOT MOUNTED');
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function dispatch(...args: Parameters<typeof navigationRef.navigate>) {
  if (navigationRef.isReady()) {
    // Perform navigation if the app has mounted
    navigationRef.dispatch(...args);
  } else {
    log.warn('ROUTER NOT MOUNTED');
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
