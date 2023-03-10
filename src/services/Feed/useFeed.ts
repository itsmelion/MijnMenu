import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const queryKey = 'feed';

export function useFeed() {
  return useQuery({
    queryKey: ['feed'],
    queryFn: () => axios
      .get('http://localhost:5001/firekantora/europe-west1/feed')
      .then(({ data }) => data),
  });
}
