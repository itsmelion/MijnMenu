import { useQuery } from '@tanstack/react-query';

import * as mock from './mock';

export const useOrder = (orderId: string) => useQuery({
  queryKey: ['orders', orderId],
  queryFn: async () => mock.order,
  enabled: !!orderId,
});
