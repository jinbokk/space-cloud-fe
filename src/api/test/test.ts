import axios from 'axios';

/**
 * axios, react-query 테스트용 api
 */
export const getUserById = async () => {
  const res = await axios.get(`https://reqres.in/api/users/2`);
  return res;
};
