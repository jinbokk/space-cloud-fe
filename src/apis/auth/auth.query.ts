import { useMutation } from '@tanstack/react-query';

import {
  postAuthEmailVerification,
  postAuthEmailVerificationVerify,
  postAuthLogin,
  postAuthSignUp,
} from './auth';
import {
  AuthEmailVerificationParamsType,
  AuthEmailVerificationVerifyParamsType,
  AuthLoginParamsType,
  AuthSignupParamsType,
} from './types';

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

/**
 * Auth 이메일 인증코드 발급 뮤테이션
 */
export const useAuthEmailVerificationMutation = () => {
  return useMutation({
    mutationFn: (params: AuthEmailVerificationParamsType) =>
      postAuthEmailVerification(params),
  });
};

/**
 * Auth 이메일 인증코드 인증 뮤테이션
 */
export const useAuthEmailVerificationVerifyMutation = () => {
  return useMutation({
    mutationFn: (params: AuthEmailVerificationVerifyParamsType) =>
      postAuthEmailVerificationVerify(params),
  });
};
