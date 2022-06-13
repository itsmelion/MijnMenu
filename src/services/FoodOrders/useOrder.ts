import { useQuery } from 'react-query';

export const useOrder = (orderId: string) => useQuery({
  queryKey: ['orders', orderId],
  queryFn: async () => 1,
});
