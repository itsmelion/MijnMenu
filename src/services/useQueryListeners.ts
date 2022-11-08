import NetInfo from '@react-native-community/netinfo'
import { onlineManager, focusManager } from '@tanstack/react-query'
import { AppState, Platform } from 'react-native'
import type { AppStateStatus } from "react-native"
import { useEffect } from "react"

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

function useOnlineManager() {
  useEffect(() => {
    // React Query already supports on reconnect auto refetch in web browser
    if (Platform.OS !== 'web') {
      return NetInfo.addEventListener((state) => {
        onlineManager.setOnline(
          state.isConnected != null &&
            state.isConnected &&
            Boolean(state.isInternetReachable)
        );
      });
    }
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
