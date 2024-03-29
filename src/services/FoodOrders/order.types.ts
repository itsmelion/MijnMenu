import type { ImageKind } from '../types';

export interface OrderResponse {
  id: string;
  menuFormId: string;
  menuFormName: string;
  companyUserId: string;
  menus: Menu[];
  isReplied: boolean;
  isClosed: boolean;
  submittedUtc: string | null;
  replyDeadlineUtc: string | null;
  startDateUtc: string;
  endDateUtc: string;
}

type Menu = {
  menuId: string;
  serveDateUtc: string;
  meals: Meal[];
}

// type Meal = {
//   id: string;
//   productMealTypeId: string;
//   productMealTypeName: string;
//   productMealTypeIcon: string;
//   mealOptions: MealOption[];
// }

type MealOption = {
  mealOptionId: string;
  productName: string;
  productDescription: string;
  productImageId: string;
  isSelected: boolean;
  isDefault: boolean;
  bufferLeftCount: number;
}

// Chris Types
export interface Meal {
  readonly id: string;

  readonly name: string;
  readonly description: string;

  readonly images: {
    detail: ImageKind;
  };

  readonly attributes: {
    halal: boolean;
    vegan: boolean;
    milk: boolean;
    nuts: boolean;
  };
}
