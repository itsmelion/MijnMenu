import { Card as GenericCard } from '../Card';
import { Text } from '../Text/Text';

export interface MealCardProps {
  mealId: unknown;
}

export const Card = ({ mealId }: MealCardProps) => (
  <GenericCard>
    <Text>{`Im a meal with ID: ${mealId}`}</Text>
  </GenericCard>
);
