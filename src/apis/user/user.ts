import API_ENDPOINTS from '../api-endpoints';
import { authAxios } from '../axios';
import { UserInfoResultType } from './types';

/**
 * User 정보조회 API
 */
export const getUserInfo = async (): Promise<UserInfoResultType> => {
  const res = await authAxios.get(`${API_ENDPOINTS.USER}`);

  if (res.status !== 200) {
    throw res.data.msg;
  }

  return res.data;
};

/**
 * User 회원탈퇴 API
 */
export const deleteUserInfo = async (): Promise<UserInfoResultType> => {
  const res = await authAxios.delete(`${API_ENDPOINTS.USER}`);

  if (res.status !== 200) {
    throw res.data.msg;
  }

  return res.data;
};
