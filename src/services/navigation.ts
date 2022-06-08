import { StackActions } from '@react-navigation/native';
import log from 'loglevel';
import { createRef } from 'react';

export const navigationRef = createRef();
export const isReadyRef = createRef();

export function navigate(...args) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(...args);
  } else {
    log.warn('ROUTER NOT MOUNTED');
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function push(...args) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.push(...args));
  } else {
    log.warn('ROUTER NOT MOUNTED');
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function dispatch(...args) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(...args);
  } else {
    log.warn('ROUTER NOT MOUNTED');
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
