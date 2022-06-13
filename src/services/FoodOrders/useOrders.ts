import { useQuery } from 'react-query';

export const useOrders = () => useQuery({
  queryKey: ['orders'],
  queryFn: async () => [0, 1, 2],
});
