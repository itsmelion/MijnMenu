import messaging from '@react-native-firebase/messaging';
import log from 'loglevel';

// const saveToken = (token: string) => axios.put('/user/fcmtoken', { token });
const saveToken = (token: string) => log.warn('saveToken', token);

export async function getToken() {
  return messaging()
    .getToken()
    .then(token => {
      log.debug('fcmToken extracted: ', token);
      return token;
    })
    .then(saveToken)
    .catch(e => { log.error(e); throw e; });
}

// Listen to whether the token changes
export function onTokenRefresh() {
  return messaging()
    .onTokenRefresh(saveToken)
    .then(r => { log.debug(JSON.stringify(r, null, 2)); return r; })
    .catch(e => { log.error(e); throw e; });
}

export function unregisterToken() {
  return messaging().unregisterDeviceForRemoteMessages();
  // return axios.delete('/user/fcmtoken')
  //   .catch(error => {
  //     log.error(new Error('fail removing FCM token'), error);
  //   });
}
