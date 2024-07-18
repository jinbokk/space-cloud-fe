import API_ENDPOINTS from '@/apis/api-endpoints';
import { pureAxios } from '@/apis/axios';

import { CategoryType, MainCategoryType, SubCategoryType } from './types';

// Fetch all main categories
export const getMainCategories = async (): Promise<MainCategoryType[]> => {
  try {
    const res = await pureAxios.get(API_ENDPOINTS.CATEGORIES_MAIN);
    if (res.status !== 200) {
      throw new Error(res.data.msg || 'Failed to fetch main categories');
    }
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Fetch all subcategories of a main category
export const getSubCategories = async (
  id: number,
): Promise<SubCategoryType[]> => {
  try {
    const res = await pureAxios.get(
      `${API_ENDPOINTS.CATEGORIES_MAIN}/${id}/sub`,
    );
    if (res.status !== 200) {
      throw new Error(res.data.msg || 'Failed to fetch subcategories');
    }
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Fetch all categories
export const getAllCategories = async (): Promise<CategoryType[]> => {
  try {
    const res = await pureAxios.get(API_ENDPOINTS.CATEGORIES);
    if (res.status !== 200) {
      throw new Error(res.data.msg || 'Failed to fetch all categories');
    }
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
