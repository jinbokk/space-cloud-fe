import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { DataErrorType } from '../types';
import { axiosConfig } from './const';
import { checkEnvError, logOnDev } from './utils';

checkEnvError();

const apiAxios: AxiosInstance = axios.create(axiosConfig);

apiAxios.interceptors.request.use(onRequest);
apiAxios.interceptors.response.use(onResponse, onErrorResponse);

/**
 * axios request
 */
function onRequest(
  config: AxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> {
  const { method, url } = config;

  logOnDev(`🚀  [API] ${method?.toUpperCase()} ${url} | Request`);

  return Promise.resolve(config as InternalAxiosRequestConfig);
}

/**
 * axios response
 */
function onResponse(response: AxiosResponse): AxiosResponse {
  const { method, url } = response.config;
  const { status } = response;

  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);

  return response;
}

/**
 * axios error response
 */
function onErrorResponse(
  error: AxiosError<DataErrorType>,
): Promise<AxiosError> {
  if (axios.isAxiosError(error) && error?.response) {
    const { method, url } = error.config as AxiosRequestConfig;
    const { status } = error.response as AxiosResponse;

    logOnDev(
      `💀 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${
        error.response.data.message
      }`,
    );
  } else if (error instanceof Error && error.name === 'TimeoutError') {
    logOnDev(`💀 [API] | TimeError 요청 시간이 초과되었습니다.`);
  } else if (error?.response) {
    logOnDev(`💀 [API]  | Error ${error.response.data.message}`);
  }

  // TODO: 에러 데이터 처리
  return Promise.reject(error);
}

export default apiAxios;
