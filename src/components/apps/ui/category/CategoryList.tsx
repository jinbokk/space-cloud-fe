import {
  useAllCategoriesQuery,
  useMainCategoriesQuery,
} from '@/categories/categories.query';
import { SubCategoryType } from '@/categories/types';
import React, { useEffect, useState } from 'react';
import { styled } from 'twin.macro';

import SubCategoryItem from './SubCategoryItem';

export default function CategoryList() {
  const { data: mainCategories, isLoading: mainLoading } =
    useMainCategoriesQuery();

  const { data: allCategories, isLoading: allLoading } =
    useAllCategoriesQuery();

  const [selectedMainCategoryId, setSelectedMainCategoryId] = useState<
    number | null
  >(null);

  const [subCategories, setSubCategories] = useState<SubCategoryType[]>([]);

  useEffect(() => {
    if (mainCategories) {
      setSelectedMainCategoryId(null); // 기본값을 전체로 설정
    }
  }, [mainCategories]);

  useEffect(() => {
    if (selectedMainCategoryId === null && allCategories) {
      const allSubCategories = allCategories.flatMap(
        (category) => category.subCategories,
      );
      setSubCategories(allSubCategories);
    } else if (selectedMainCategoryId !== null && allCategories) {
      const selectedCategory = allCategories.find(
        (category) => category.id === selectedMainCategoryId,
      );
      setSubCategories(selectedCategory ? selectedCategory.subCategories : []);
    }
  }, [selectedMainCategoryId, allCategories]);

  if (mainLoading || allLoading) {
    return;
  }

  return (
    <CategoryContainer>
      <TabsContainer>
        <Tab
          isActive={selectedMainCategoryId === null}
          onClick={() => setSelectedMainCategoryId(null)}
        >
          전체
        </Tab>
        {mainCategories?.map((mainCategory) => (
          <Tab
            key={mainCategory.id}
            isActive={mainCategory.id === selectedMainCategoryId}
            onClick={() => setSelectedMainCategoryId(mainCategory.id)}
          >
            {mainCategory.name}
          </Tab>
        ))}
      </TabsContainer>

      <SubCategoryContainer>
        {subCategories.map((subCategory) => (
          <SubCategoryItem key={subCategory.id} name={subCategory.name} />
        ))}
      </SubCategoryContainer>
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  margin: 36px auto 52px;
  max-width: 728px;
`;

const TabsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  margin-bottom: 20px;

  font-family: Pretendard !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.025em;
  text-align: center;
  color: #767676;
  border-bottom: 1px solid #f0f0f0;
`;

const Tab = styled.button<{ isActive: boolean }>`
  border: none;
  border-bottom: ${(props) =>
    props.isActive ? '2px solid #632ed8' : '2px solid transparent'};
  background: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }

  &:after {
    content: '';
    flex: auto;
  }
`;

const SubCategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
