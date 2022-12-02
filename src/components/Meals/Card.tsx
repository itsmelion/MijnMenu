import { Image } from 'react-native';

import { Food } from 'services';

import { Card as GenericCard } from '../Card';
import { Text } from '../Text/Text';

export interface MealCardProps {
  meal: Food.Meal;
}

export const Card = ({ meal }: MealCardProps) => (
  <GenericCard>
    <Image
      source={require('../../assets/img/food-bowl/food-bowl.png')}
      style={{
        flexShrink: 0,
        flexGrow: 1,
        flexBasis: '100%',
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
      }}
    />

    <Text size="L">{meal.name}</Text>
    <Text size="M">{meal.description}</Text>
  </GenericCard>
);
