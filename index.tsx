import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry, StatusBar } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider, } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@emotion/react';
import log from 'loglevel';

import { name as appName } from './app.json';
import { Routes } from './src/routes';
import { defaultTheme, routerTheme } from './src/themes';
import { Splash } from './src/routes/Splash';
import { navigation } from 'services';
// import 'services/Notifications/notifications.config';

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
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={client}>
        <StatusBar barStyle="dark-content" />

        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer
            ref={navigation.navigationRef}
            fallback={<Splash name="Fallback route" />}
            linking={linking}
            onReady={() => {
              navigation.isReadyRef.current = true;
            }}
            theme={routerTheme}>
            <Routes navigation={navigation} />
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

enableScreens();

// Amplify.configure(awsExports);
AppRegistry.registerComponent(appName, () => App);

if (__DEV__) {
  import('./src/services/debuggers')
    .then(() => log.debug('Reactotron Configured'))
    .catch((e) => log.debug('Fail config debugger', e));
}
