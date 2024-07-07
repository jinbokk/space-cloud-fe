import { useAuthStore } from '@/store/authStore';

import API_ENDPOINTS from '../api-endpoints';
import pureAxios from '../axios/pureAxios';
import {
  AuthEmailVerificationParamsType,
  AuthEmailVerificationResultType,
  AuthEmailVerificationVerifyParamsType,
  AuthEmailVerificationVerifyResultType,
  AuthLoginParamsType,
  AuthLoginResultType,
  AuthRefreshTokenParamsType,
  AuthRefreshTokenResultType,
  AuthSignupParamsType,
  AuthSignupResultType,
} from './types';

/**
 * Auth 액세스 토큰과 리프레시 토큰 재발행하는 API
 */
export const refreshAccessToken = async (
  params: AuthRefreshTokenParamsType,
): Promise<AuthRefreshTokenResultType> => {
  const res = await pureAxios.post(`${API_ENDPOINTS.AUTH_TOKENS}`, params);

  if (res.status === 204) {
    console.log('authStore SetState');
    useAuthStore.setState({
      accessToken: res.data.accessToken,
    });
  }

  return res.data;
};

/**
 * Auth 회원 가입 요청 API
 */
export const postAuthSignUp = async (
  param: AuthSignupParamsType,
): Promise<AuthSignupResultType> => {
  const res = await pureAxios.post(`${API_ENDPOINTS.AUTH_REGISTER}`, param);

  if (res.status !== 204) {
    throw res.data.msg;
  }

  return res.data;
};

/**
 * Auth 로그인 요청 API
 */
export const postAuthLogin = async (
  param: AuthLoginParamsType,
): Promise<AuthLoginResultType> => {
  const res = await pureAxios.post(`${API_ENDPOINTS.AUTH_LOGIN}`, param);

  if (res.data.accessToken) {
    useAuthStore.setState({
      accessToken: res.data.accessToken,
    });
  }

  return res.data;
};

/**
 * Auth 회원가입 이메일 인증코드 발급 API
 */
export const postAuthEmailVerification = async (
  param: AuthEmailVerificationParamsType,
): Promise<AuthEmailVerificationResultType> => {
  const res = await pureAxios.post(
    `${API_ENDPOINTS.AUTH_EMAIL_VERIFICATION}`,
    param,
  );

  return res.data;
};

/**
 * Auth 회원가입 이메일 인증코드 인증 API
 */
export const postAuthEmailVerificationVerify = async (
  param: AuthEmailVerificationVerifyParamsType,
): Promise<AuthEmailVerificationVerifyResultType> => {
  const res = await pureAxios.post(
    `${API_ENDPOINTS.AUTH_EMAIL_VERIFICATION}/verify`,
    param,
  );

  return res.data;
};

/**
 * Auth AccessToken 재발급 API
 */
export const postAuthRefreshToken = async (
  param: AuthRefreshTokenParamsType,
): Promise<AuthRefreshTokenResultType> => {
  const res = await pureAxios.post(`${API_ENDPOINTS.AUTH_TOKENS}`, param);

  return res.data;
};
