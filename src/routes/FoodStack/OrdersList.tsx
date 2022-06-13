import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OrderSummary } from '../../components/Food/OrderList/OrderSummary';
import { Food } from '../../services';

export const OrdersList = () => {
  const { data: orders, isLoading } = Food.useOrders();

  return (
    <SafeAreaView>
      {(isLoading || !orders) ? <ActivityIndicator /> : orders
        ?.map(order => <OrderSummary key={order} order={order} />)}
    </SafeAreaView>
  );
};
