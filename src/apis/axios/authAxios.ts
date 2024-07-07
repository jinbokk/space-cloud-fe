import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { useAuthStore } from '@/store/authStore';

import { refreshAccessToken } from '../auth/auth';
import { DataErrorType } from '../types';
import { axiosConfig } from './const';
import { checkEnvError, logOnDev } from './utils';

checkEnvError();

const authAxios: AxiosInstance = axios.create(axiosConfig);

authAxios.interceptors.request.use(onRequest);
authAxios.interceptors.response.use(onResponse, onErrorResponse);

type AxiosRequestConfigWithRetry = AxiosRequestConfig & {
  _retry: boolean;
};

/**
 * axios request
 */
function onRequest(
  config: AxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> {
  const { method, url } = config;

  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);

  // 토큰 셋팅
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    };
    return Promise.resolve({ ...config } as InternalAxiosRequestConfig);
  }

  // 액세스 토큰이 없는 경우 에러 처리
  return Promise.reject({
    status: 400,
    response: { data: { message: 'Access token not found.' } },
  });
}

/**
 * axios response
 */
function onResponse(response: AxiosResponse): AxiosResponse {
  const { method, url } = response.config;
  const { status } = response;

  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);

  if (status === 204 || status === 200) {
    return response;
  } else {
    // TODO: 백엔드 에러 코드에 따른 처리 필요
    // 응답 실패 처리
    throw response.data.msg;
  }
}

/**
 * axios error response
 */
async function onErrorResponse(
  error: AxiosError<DataErrorType>,
): Promise<AxiosError> {
  if (axios.isAxiosError(error) && error?.response) {
    const originalRequest = error.config as AxiosRequestConfigWithRetry;
    const { method, url } = originalRequest;
    const { status } = error;
    logOnDev(
      `💀 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${
        error.response.data.message
      }`,
    );

    console.log({ status });

    // TODO : status 디버깅 후, 그에 맞게 case 수정 필요
    switch (status) {
      // 토큰 만료시 권한에러
      case 400: {
        if (!originalRequest._retry) {
          originalRequest._retry = true;
          await refreshAccessToken({ refreshToken: 'aa' });
          return authAxios(originalRequest);
        }
        break;
      }
      default: {
        break;
      }
    }
  } else if (error instanceof Error && error.name === 'TimeoutError') {
    logOnDev(`💀 [API] | TimeError 요청 시간이 초과되었습니다.`);
  } else if (error?.response) {
    logOnDev(`💀 [API]  | Error ${error.response.data.message}`);
  }

  // TODO: 에러 데이터 처리
  return Promise.reject(error);
}

export default authAxios;
