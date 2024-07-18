export interface CategoryType {
  id: number;
  name: string;
  subCategories: SubCategoryType[];
}

export interface MainCategoryType {
  id: number;
  name: string;
}

export interface SubCategoryType {
  id: number;
  name: string;
  mainCategory: MainCategoryType;
}
