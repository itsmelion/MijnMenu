import NetInfo from '@react-native-community/netinfo';
import { onlineManager, focusManager } from '@tanstack/react-query';
import _ from 'lodash';
import { useEffect } from 'react';
import { AppState, Platform } from 'react-native';

import type { AppStateStatus } from 'react-native';

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

function useOnlineManager() {
  useEffect(() => {
    let unsubscribe = _.noop;
    // React Query already supports on reconnect auto refetch in web browser
    if (Platform.OS !== 'web') {
      unsubscribe = NetInfo.addEventListener((state) => {
        onlineManager.setOnline(
          // eslint-disable-next-line no-eq-null
          state.isConnected != null
            && state.isConnected
            && Boolean(state.isInternetReachable),
        );
      });
    }

    return () => { unsubscribe(); };
  }, []);
}

function useAppState(onChange: (status: AppStateStatus) => void) {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onChange);
    return () => {
      subscription.remove();
    };
  }, [onChange]);
}

export function useQueryListeners() {
  useOnlineManager();
  useAppState(onAppStateChange);
}
