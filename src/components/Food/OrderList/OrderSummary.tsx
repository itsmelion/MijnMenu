import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

import { Card } from '../../Card';
import { Text } from '../../Text/Text';

export const OrderSummary: React.FC<{ order: unknown }> = ({ order }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.push('Order', { orderId: order })}>
      <Card>
        <Text>{`Im a order Item ${order}`}</Text>
      </Card>
    </Pressable>
  );
};
