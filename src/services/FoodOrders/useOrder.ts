import { useQuery } from '@tanstack/react-query';

import * as mock from './mock';

export const useOrder = (orderId: string) => useQuery({
  queryKey: ['orders', orderId],
  queryFn: async () => mock.order,
  staleTime: 1000 * 60 * 6, // 6 min
  enabled: !!orderId,
});
