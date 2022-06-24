import 'react-native-gesture-handler';
import { ThemeProvider } from '@emotion/react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import log from 'loglevel';
import { useMemo } from 'react';
import { AppRegistry, StatusBar, useColorScheme } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { enableFreeze } from 'react-native-screens';
import { QueryClient, QueryClientProvider } from 'react-query';

import { navigation } from 'services';

import { Routes, Splash } from 'routes';
import { defaultTheme, routerTheme } from 'themes';

import { dark } from 'themes/colors';
import { generateTheme } from 'themes/theme';

import { name as appName } from './app.json';

const client = new QueryClient();

const linking = {
  prefixes: [
    'fluxum.online://',
    'online.fluxum://',
    // may not needed
    'https://fluxum.online',
  ],

  config: {
    screens: {
      ConfirmationCode: 'confirmation/:username',
    },
  },
};

function App() {
  const navigationRef = useNavigationContainerRef();
  const isDarkMode = useColorScheme() === 'dark';

  const theme = useMemo(() => {
    if (!isDarkMode) return defaultTheme;
    return generateTheme({ colors: dark });
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <StatusBar barStyle="dark-content" />

        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer
            ref={navigationRef}
            fallback={<Splash name="Fallback route" />}
            linking={linking}
            onReady={() => {
              navigation.isReadyRef.current = true;
            }}
            theme={routerTheme}>
            <Routes navigation={navigationRef} />
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

// https://github.com/software-mansion/react-native-screens#experimental-support-for-react-freeze
enableFreeze(true);

// Amplify.configure(awsExports);
AppRegistry.registerComponent(appName, () => App);

if (__DEV__) {
  import('./src/services/debuggers')
    .then(() => log.debug('Reactotron Configured'))
    .catch((e) => log.debug('Fail config debugger', e));
}
