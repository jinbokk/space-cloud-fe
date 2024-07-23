import Image from 'next/image';
import { styled } from 'twin.macro';

import NoImage from '../NoImage';

// TODO : 백엔드와 논의하여 프로퍼티 명세 후 수정 필요
export type SpaceCardProps = {
  imgSrc?: string;
  title?: string; // 공간명
  dong?: string; // 위치 (ex. 망원동)
  hashtag?: string[]; // 해시태그
  fee?: number; // 가격
  capacity?: number; // 수용인원
  reviewCount?: number; // 리뷰 수
  likeCount?: number; // 좋아요 수
};

export default function SpaceCard({
  imgSrc,
  title = '공간명',
  dong = '동명',
  hashtag = ['#해시태그1', '#해시태그2', '#해시태그3'],
  fee = 99999,
  capacity = 20,
  reviewCount = 10,
  likeCount = 30,
}: SpaceCardProps) {
  return (
    <SpaceCardContainer>
      <ImageWrapper>
        {imgSrc ? (
          <Image src={imgSrc} alt="space" fill style={{ objectFit: 'cover' }} />
        ) : (
          <NoImage />
        )}
      </ImageWrapper>
      <ContentsContainer>
        <Title>{title}</Title>

        <InfoWrapper>
          <Dong>{dong}</Dong>
          <HastagWrapper>
            {hashtag.map((tag, index) => {
              return <HashTag key={index}>{tag}</HashTag>;
            })}
          </HastagWrapper>
        </InfoWrapper>

        <InfoWrapper>
          {/* TODO : 원/시간 단위 확인 필요 */}
          <Fee>
            <strong>{fee.toLocaleString()}</strong> 원/시간
          </Fee>
          <CapacityReviewLikeWrapper>
            <Capacity>{`최대 ${capacity}인`}</Capacity>
            <ReviewCount>{reviewCount}</ReviewCount>
            <LikeCount>{likeCount}</LikeCount>
          </CapacityReviewLikeWrapper>
        </InfoWrapper>
      </ContentsContainer>
    </SpaceCardContainer>
  );
}

const SpaceCardContainer = styled.div`
  box-shadow: 1px 2px 6px 0 rgba(0, 0, 0, 0.16078);
  border-radius: 12px;
  cursor: pointer;
  min-width: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 180px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: calc(100% - 180px);
  padding: 12px 16px;
  min-width: 0;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.025em;

  strong {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.025em;
    text-align: left;
    color: #632ed8;
    line-height: 24px;
    padding: 0 3px 0 0;
  }
`;

const Dong = styled.div`
  display: flex;
  position: relative;
  padding-left: 15px;
  &::before {
    position: absolute;
    content: '';
    width: 11px;
    height: 11.5px;
    top: 2px;
    left: 0;
    bottom: 1px;
    background: url(images/icons/location_mark.svg);
  }
`;

const HastagWrapper = styled.span`
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  span {
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const HashTag = styled.span`
  position: relative;
`;

const Fee = styled.span`
  position: relative;
`;

const CapacityReviewLikeWrapper = styled.div`
  width: fit-content;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Capacity = styled.span`
  position: relative;
  padding-left: 15px;
  padding-right: 5px;
  &::before {
    position: absolute;
    content: '';
    width: 12px;
    height: 12px;
    top: 1px;
    left: 0;
    background: url(images/icons/users.svg);
  }
`;

const ReviewCount = styled.span`
  position: relative;
  padding-left: 15px;
  padding-right: 5px;
  &::before {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    top: 2px;
    left: 0;
    background: url(images/icons/review.svg);
  }
`;

const LikeCount = styled.span`
  position: relative;
  padding-left: 15px;
  &::before {
    position: absolute;
    content: '';
    width: 12px;
    height: 12px;
    top: 1px;
    left: 0;
    background: url(images/icons/like.svg);
  }
`;
