import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

import { Card } from '../Card';
import { Text } from '../Text/Text';

export interface MealItemProps {
  mealId: unknown;
};

export const Item = ({ mealId }: MealItemProps) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Order', { orderId: mealId })}>
      <Card>
        <Text>{`Im a meal with ID: ${mealId}`}</Text>
      </Card>
    </Pressable>
  );
};
