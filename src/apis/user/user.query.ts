import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import API_ENDPOINTS from '../api-endpoints';
import { UserInfoResultType } from './types';
import { deleteUserInfo, getUserInfo } from './user';

/**
 * User 정보조회 쿼리
 */
export const useUserInfoQuery = () => {
  return useQuery<UserInfoResultType, AxiosError>({
    queryKey: [API_ENDPOINTS.USER],
    queryFn: () => getUserInfo(),
  });
};

/**
 * User 회원탈퇴 쿼리
 */
export const useUserDeleteMutation = () => {
  return useMutation({
    mutationFn: () => deleteUserInfo(),
  });
};
