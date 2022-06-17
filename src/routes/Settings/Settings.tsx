import { Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Food } from 'services';

import { Text, Headlines } from 'components';

export const MenuAdjustments = () => {
  const { data: foodPreferences } = Food.usePreferences();
  const { mutate } = Food.useChangePreferences();

  return (
    <SafeAreaView>
      <Headlines.H3>Special requirements</Headlines.H3>
      <Text>I am vegan</Text>
      <Text>Kosher/Hallal</Text>

      <Switch
        onValueChange={(value) => mutate({ preference: 'vegan', value })}
        value={foodPreferences?.vegan}
      />
    </SafeAreaView>
  );
};
