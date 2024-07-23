import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';
import { styled, theme } from 'twin.macro';

import { useInfiniteSearchSpacesQuery } from '@/apis/spaces/spaces.query';

import SpaceCard from '../../ui/spaceCard/SpaceCard';

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteSearchSpacesQuery({ params: { query: String(q), size: 10 } });

  const observerRef = useRef<IntersectionObserver | undefined>();

  const lastSpaceCardRef = useCallback(
    (node: any) => {
      if (isLoading || isFetchingNextPage) {
        return;
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node && observerRef.current) {
        observerRef.current.observe(node);
      }
    },
    [isLoading, isFetchingNextPage, hasNextPage, fetchNextPage],
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ResultsContainer>
      <SpaceCardContainer>
        {data.pages.map((page, pageIndex) =>
          page.content.map((space, index) => {
            if (
              pageIndex === data.pages.length - 1 &&
              index === page.content.length - 1
            ) {
              return (
                <div key={space.id} ref={lastSpaceCardRef}>
                  <SpaceCard
                    title={space.name}
                    capacity={space.maxCapacity}
                    hashtag={space.hashtags.map((tag) => `#${tag.name}`)}
                    fee={space.hourlyRate}
                    reviewCount={space.reviewCount}
                    likeCount={space.likeCount}
                    dong={space.realEstate.address.dong}
                    imgSrc="https://my-spacestory-bucket.s3.ap-northeast-2.amazonaws.com/298024c6-bdd1-4533-8873-766d3688b0ed-SpaceStory.png"
                  />
                </div>
              );
            } else {
              return (
                <SpaceCard
                  key={space.id}
                  title={space.name}
                  capacity={space.maxCapacity}
                  hashtag={space.hashtags.map((tag) => `#${tag.name}`)}
                  fee={space.hourlyRate}
                  reviewCount={space.reviewCount}
                  likeCount={space.likeCount}
                  dong={space.realEstate.address.dong}
                  imgSrc="https://my-spacestory-bucket.s3.ap-northeast-2.amazonaws.com/298024c6-bdd1-4533-8873-766d3688b0ed-SpaceStory.png"
                />
              );
            }
          }),
        )}
      </SpaceCardContainer>
      {isFetchingNextPage && <Loading>Loading more...</Loading>}
    </ResultsContainer>
  );
}

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1158px;
`;

const SpaceCardContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: ${theme`screens.md`}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${theme`screens.lg`}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Loading = styled.div`
  margin: 16px 0;
`;
