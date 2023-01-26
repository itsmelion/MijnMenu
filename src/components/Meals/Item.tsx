import { useTheme } from '@emotion/react';
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
  const { colors } = useTheme();

  return (
    <Pressable onPress={() => navigation.navigate('Order', { orderId: meal.id })}>
      <Card style={{ backgroundColor: colors.lime[0] }}>
        <Text style={{ color: 'hsla(0,0,0,0.58)' }}>
          {`${meal.name} id(${meal.id})`}
        </Text>
      </Card>
    </Pressable>
  );
};
