import { useNavigation, useRoute } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Food } from 'services';

import { Button, Card, Text } from 'components';

export const Order = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { data: order } = Food.useOrder(params?.orderId);

  return (
    <SafeAreaView>
      <Card>
        <Text>{`Im a order Item ${order}`}</Text>

        <Button
          onPress={navigation.goBack}
          title="Go back"
        />
      </Card>
    </SafeAreaView>
  );
};
