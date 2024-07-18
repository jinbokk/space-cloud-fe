import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import API_ENDPOINTS from '@/apis/api-endpoints';

import {
  getAllCategories,
  getMainCategories,
  getSubCategories,
} from './categories';
import { CategoryType, MainCategoryType, SubCategoryType } from './types';

// 메인 카테고리 리스트 쿼리
export const useMainCategoriesQuery = ({
  useQueryOptions,
}: { useQueryOptions?: any } = {}) => {
  return useQuery<MainCategoryType[], AxiosError>({
    queryKey: [API_ENDPOINTS.CATEGORIES_MAIN],
    queryFn: getMainCategories,
    ...useQueryOptions,
  });
};

// 서브 카테고리 리스트 쿼리
export const useSubCategoriesQuery = ({
  id,
  useQueryOptions,
}: {
  id: number;
  useQueryOptions?: any;
}) => {
  return useQuery<SubCategoryType[], AxiosError>({
    queryKey: [API_ENDPOINTS.CATEGORIES_MAIN, id, 'sub'],
    queryFn: () => getSubCategories(id),
    ...useQueryOptions,
  });
};

// 전체 카테고리 리스트 쿼리
export const useAllCategoriesQuery = ({
  useQueryOptions,
}: { useQueryOptions?: any } = {}) => {
  return useQuery<CategoryType[], AxiosError>({
    queryKey: [API_ENDPOINTS.CATEGORIES],
    queryFn: getAllCategories,
    ...useQueryOptions,
  });
};
