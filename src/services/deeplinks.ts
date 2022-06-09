import AsyncStorage from '@react-native-async-storage/async-storage';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import log from 'loglevel';
import queryString from 'query-string';
import { useEffect } from 'react';

function removeBaseURL(url) {
  const { query } = queryString.parseUrl(url);
  return query.invitation;
}

export function useListenDynamicLinks(navigation) {
  // Foreground events
  // When the app is in the foreground (visible on the device), you can use the onLink method to subscribe to events as and when they happen:

  // Handle dynamic link inside your own application
  useEffect(() => {
    async function saveCode(code) {
      log.debug('code', code);
      if (!code) return null;
      await AsyncStorage.setItem('invitationCode', code);
      navigation.navigate('PartnerJoined');
      return code;
    }

    const unsubscribe = dynamicLinks().onLink((r) => {
      log.debug('-> Checking Deeplink (foreground event)');
      const code = removeBaseURL(r?.url ?? '');
      return saveCode(code);
    });

    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Background/Quit events
  // If the application is in a background state / has fully quit then the getInitialLink method can be used to detect whether the application was opened via a link:
  useEffect(() => {
    async function saveCode(code) {
      if (!code) return null;
      const localCode = await AsyncStorage.getItem('invitationCode');
      log.debug('code', code, localCode);

      if (localCode === code) return null;

      await AsyncStorage.setItem('invitationCode', code);
      navigation.navigate('PartnerJoined');
      return code;
    }

    log.debug('-> Checking Deeplink (background event)');
    dynamicLinks()
      .getInitialLink()
      .then(async link => {
        const code = removeBaseURL(link?.url ?? '');

        return saveCode(code);
      })
      .catch(e => { log.error(e); throw e; });
  }, [navigation]);

  return null;
}
