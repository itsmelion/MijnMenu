import { View } from 'react-native';

import { navigation, User } from 'services';

import {
  Text, Headlines, HStack, Button,
} from 'components';

export const HelloHeader = () => {
  const { data: user } = User.useUser();

  if (!user) return null;

  return (
    <HStack align="between center">
      <View style={{ margin: 6 }}>
        <Headlines.H2 font="Black" title="Aloha!" />
        <Text font="Light" size="M" title={user.name} />
      </View>

      <Button onPress={() => navigation.navigate('Settings')} title="config" />
    </HStack>
  );
};
