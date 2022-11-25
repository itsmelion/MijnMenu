import { useQuery } from '@tanstack/react-query';

import * as mock from './mock';

export const useOrders = () => useQuery({
  queryKey: ['orders'],
  queryFn: async () => mock.orders,
});
