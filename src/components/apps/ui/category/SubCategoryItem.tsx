import { useRouter } from 'next/router';
import React from 'react';
import { styled } from 'twin.macro';

interface SubCategoryItemProps {
  name: string;
}

const iconMapping: Record<string, string> = {
  파티룸: 'gathering',
  연습실: 'dance_studio',
  촬영스튜디오: 'shooting',
  스터디룸: 'study',
  공연장: 'performance',
  공유주방: 'kitchen',
  댄스연습실: 'dance_practice',
  렌탈스튜디오: 'rentalstudio',
  회의실: 'meeting',
  라이브방송: 'broadcasting',
  카페: 'cafe',
  보컬연습실: 'vocal_studio',
  호리존: 'horizon',
  세미나실: 'seminar',
  컨퍼런스: 'conference',
  스몰웨딩: 'wedding',
  악기연습실: 'instrumental_room',
  실외촬영: 'outdoor',
  강의실: 'lecture',
  운동시설: 'workingout',
  갤러리: 'gallery',
  녹음실: 'recording',
  독립오피스: 'private_office',
  코워킹오피스: 'coworking_office',
  비상주서비스: 'address_service',
  당일캠핑: 'camping_service',
  가정집: 'house',
};

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: none;
  background: none;
  cursor: pointer;
  width: 100px;
`;

const Icon = styled.i<{ iconUrl: string }>`
  width: 48px;
  height: 48px;
  background-image: url(${(props) => props.iconUrl});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 8px;
`;

const Keyword = styled.div`
  text-align: center;
  font-size: 13px;
  font-family: Pretendard !important;
`;

const SubCategoryItem: React.FC<SubCategoryItemProps> = ({ name }) => {
  const router = useRouter();
  const iconUrl = `/images/icons/${iconMapping[name]}.svg`;

  const handleClick = () => {
    router.push(`/search?q=${name}&page=1`);
  };

  return (
    <Button onClick={handleClick}>
      <Icon iconUrl={iconUrl} />
      <Keyword>{name}</Keyword>
    </Button>
  );
};

export default SubCategoryItem;
