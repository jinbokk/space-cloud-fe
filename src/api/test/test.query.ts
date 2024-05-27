import { useQuery } from '@tanstack/react-query';

import { getUserById } from './test';

export const useGetUserByIdQuery = () => {
  return useQuery({
    queryKey: ['getUserById'],
    queryFn: () => getUserById(),
  });
};
