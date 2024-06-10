import { useMutation } from '@tanstack/react-query';

import { postAuthLogin, postAuthSignUp } from './auth';
import { AuthLoginParamsType, AuthSignupParamsType } from './types';

/**
 * Auth 회원가입 뮤테이션
 */
export const useAuthSignupMutation = () => {
  return useMutation({
    mutationFn: (userInfo: AuthSignupParamsType) => postAuthSignUp(userInfo),
  });
};

/**
 * Auth 로그인 뮤테이션
 */
export const useAuthLoginMutation = () => {
  return useMutation({
    mutationFn: (userInfo: AuthLoginParamsType) => postAuthLogin(userInfo),
  });
};
