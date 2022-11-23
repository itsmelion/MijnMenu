import { Card as GenericCard } from '../Card';
import { Text } from '../Text/Text';

export interface MealCardProps {
  meal: unknown;
}

export const Card = ({ meal }: MealCardProps) => (
  <GenericCard>
    <Text size="L">{`Im a meal with ID: ${meal?.id ?? meal}`}</Text>
  </GenericCard>
);
