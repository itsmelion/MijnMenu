import { useQuery } from '@tanstack/react-query';

export const useOrder = (orderId: string) => useQuery({
  queryKey: ['orders', orderId],
  queryFn: async () => orderId,
  enabled: !!orderId,
});
