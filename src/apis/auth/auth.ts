import { useAuthStore } from '@/store/authStore';

import API_ENDPOINTS from '../api-endpoints';
import pureAxios from '../axios/pureAxios';
import {
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
    useAuthStore.setState({
      accessToken: res.data.accessToken,
      // TODO: 유저 정보가 없어서 임시로 추가
      user: res.data.user,
    });
  }

  // TODO : 에러핸들링 코드 추가
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

  if (res.status !== 204) {
    throw res.data.msg;
  }

  if (res.data.accessToken) {
    useAuthStore.setState({
      accessToken: res.data.accessToken,
    });
  }

  return res.data;
};
