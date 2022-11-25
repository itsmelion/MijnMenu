import { useNavigation, useRoute } from '@react-navigation/native';

import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Food } from 'services';

import { Button, Meals } from 'components';

export const Order = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { data: order } = Food.useOrder(params?.orderId);

  if (!order) return <ActivityIndicator />;

  return (
    <SafeAreaView>
      <Meals.Card meal={order} />
      <Button
        onPress={navigation.goBack}
        title="Go back"
      />
    </SafeAreaView>
  );
};
