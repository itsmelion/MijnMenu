import { AppleButton } from '@invertase/react-native-apple-authentication';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';

import { Auth as AuthService } from 'services';

import { Text } from 'components';

const Auth = createNativeStackNavigator();

const Comp = () => {
  const { mutate } = AuthService.apple.useSignIn();
  return (
    <ScrollView>
      <Text>Dashboard</Text>

      <AppleButton
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.SIGN_IN}
        cornerRadius={5}
        onPress={mutate}
        style={{
          width: 200,
          height: 60,
          margin: 10,
        }}
      />
    </ScrollView>
  );
};

export const AuthStack = () => (
  <Auth.Navigator>
    <Auth.Screen component={Comp} name="SignIn" options={{ animation: 'fade' }} />
    <Auth.Screen component={Comp} name="SignUp" options={{ animation: 'fade' }} />
    <Auth.Screen component={Comp} name="ForgotPassword" options={{ animation: 'fade' }} />
  </Auth.Navigator>
);
