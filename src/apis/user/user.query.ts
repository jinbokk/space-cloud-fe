import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import API_ENDPOINTS from '../api-endpoints';
import { UserChangePasswordParamsType, UserInfoResultType } from './types';
import { deleteUserInfo, getUserInfo, patchUserChangePassword } from './user';

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
 * User 회원탈퇴 뮤테이션
 */
export const useUserDeleteMutation = () => {
  return useMutation({
    mutationFn: () => deleteUserInfo(),
  });
};

/**
 * User 비밀번호 변경 뮤테이션
 */
export const useUserChangePasswordMutation = () => {
  return useMutation({
    mutationFn: (params: UserChangePasswordParamsType) =>
      patchUserChangePassword(params),
  });
};
