import { useQuery } from '@tanstack/react-query';

export interface User {
  name: string;
  user: string;
  email: string;
}

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async (): Promise<User> => ({
      name: 'Christhopher Leao',
      user: 'Christhopher Leao',
      email: 'christhopher.leao@dephion.com',
    }),
    staleTime: Infinity,
  });
}
