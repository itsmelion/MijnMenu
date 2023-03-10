import { appleAuth } from '@invertase/react-native-apple-authentication';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import loglevel from 'loglevel';

import { useUser } from '../User';

/**
 * Fetches the credential state for the current user, if any, and updates state on completion.
 */
async function useFetchAndUpdateCredentialState() {
  const { data: user } = useUser();
  const cache = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!user) {
        cache.setQueryData(['auth'], 'N/A');
      } else {
        const credentialState = await appleAuth.getCredentialStateForUser(user.user);
        if (credentialState === appleAuth.State.AUTHORIZED) {
          cache.setQueryData(['auth'], 'AUTHORIZED');
        } else {
          cache.setQueryData(['auth'], credentialState);
        }
      }
    },
  });
}

export function useSignIn() {
  const { mutate: fetchAndUpdateCredentialState } = useFetchAndUpdateCredentialState();
  const cache = useQueryClient();

  return useMutation({
    mutationFn: async function onAppleButtonPress() {
      console.warn('Beginning Apple Authentication');

      // start a login request
      try {
        const appleAuthRequestResponse = await appleAuth.performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });

        loglevel.log('appleAuthRequestResponse', appleAuthRequestResponse);

        const {
          user,
          email,
          nonce,
          identityToken,
          realUserStatus /* etc */,
        } = appleAuthRequestResponse;

        cache.setQueryData(['user'], user);

        fetchAndUpdateCredentialState();

        if (identityToken) {
          // e.g. sign in with Firebase Auth using `nonce` & `identityToken`
          console.log(nonce, identityToken);
        } else {
          // no token - failed sign-in?
        }

        if (realUserStatus === appleAuth.UserStatus.LIKELY_REAL) {
          console.log("I'm a real person!");
        }

        console.warn(`Apple Authentication Completed, ${user}, ${email}`);
      } catch (error) {
        if (error.code === appleAuth.Error.CANCELED) {
          console.warn('User canceled Apple Sign in.');
        } else {
          console.error(error);
        }
      }
    },
  });
}
