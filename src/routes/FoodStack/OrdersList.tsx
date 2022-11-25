import { ActivityIndicator, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Meals } from '../../components';
import { Food } from '../../services';

export const OrdersList = () => {
  const { data: orders, isLoading } = Food.useOrders();

  return (
    <SafeAreaView>
      <ScrollView>
        {(isLoading || !orders)
          ? <ActivityIndicator />
          : orders.map(order => <Meals.Item key={order} meal={order} />)}
      </ScrollView>
    </SafeAreaView>
  );
};
