import { useMutation } from '@tanstack/react-query';

import {
  postAuthEmailVerification,
  postAuthEmailVerificationVerify,
  postAuthLogin,
  postAuthLogout,
  postAuthSignUp,
  postAuthTotpQR,
  postAuthTotpVerify,
} from './auth';
import {
  AuthEmailVerificationParamsType,
  AuthEmailVerificationVerifyParamsType,
  AuthLoginParamsType,
  AuthLogoutParamsType,
  AuthSignupParamsType,
  AuthTotpQRParamsType,
  AuthTotpVerificationParamsType,
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
 * Auth 로그아웃 뮤테이션
 */
export const useAuthLogoutMutation = () => {
  return useMutation({
    mutationFn: (params: AuthLogoutParamsType) => postAuthLogout(params),
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

/**
 * Auth Totp QR코드 발급 뮤테이션
 */
export const useAuthTotpQRMutation = () => {
  return useMutation({
    mutationFn: (params: AuthTotpQRParamsType) => postAuthTotpQR(params),
  });
};

/**
 * Auth Totp QR코드 인증 뮤테이션
 */
export const useAuthTotpVerifyMutation = () => {
  return useMutation({
    mutationFn: (params: AuthTotpVerificationParamsType) =>
      postAuthTotpVerify(params),
  });
};
