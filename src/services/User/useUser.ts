import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface User {
  name: string;
  user: string;
  email: string;
}

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => axios
      .get('http://localhost:5001/firekantora/europe-west1/user')
      .then(({ data }) => data),
    staleTime: Infinity,
  });
}
