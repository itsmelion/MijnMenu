import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface FoodPreferences {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  nutFree: boolean;
  hallalKosher: boolean;
}

const defaultFoodPreferences: FoodPreferences = {
  vegetarian: false,
  vegan: false,
  glutenFree: false,
  dairyFree: false,
  nutFree: false,
  hallalKosher: false,
};

export const usePreferences = () => useQuery<FoodPreferences>({
  queryKey: ['foodPreferences'],
  queryFn: async () => {
    const foodPreferences = await AsyncStorage.getItem('foodPreferences');
    return foodPreferences ? JSON.parse(foodPreferences) : defaultFoodPreferences;
  },
  initialData: defaultFoodPreferences,
  staleTime: Infinity,
});

type foodPreferenceChange = { preference: keyof FoodPreferences, value: boolean };

export const useChangePreferences = () => {
  const cache = useQueryClient();

  return useMutation({
    mutationFn: async ({ preference, value }: foodPreferenceChange) => {
      const foodPreferences = cache.getQueryData<FoodPreferences>(['foodPreferences']) || defaultFoodPreferences;
      foodPreferences[preference] = value;
      await AsyncStorage.setItem('foodPreferences', JSON.stringify(foodPreferences));
    },
  });
};
