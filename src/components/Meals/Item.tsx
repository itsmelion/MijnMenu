import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

import { Food } from 'services';

import { Card } from '../Card';
import { Text } from '../Text/Text';

export interface MealItemProps {
  meal: Food.Meal;
}

export const Item = ({ meal }: MealItemProps) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Order', { orderId: meal.id })}>
      <Card>
        <Text>{`${meal.name} id(${meal.id})`}</Text>
      </Card>
    </Pressable>
  );
};
