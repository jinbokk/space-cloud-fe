import { useMediaQuery } from 'react-responsive';
import { styled, theme } from 'twin.macro';

import { BANNER_IMAGE_SET, DUMMY_SPACE_DATA } from '@/data/constant';

import ContentWrapper from '../../layout/ContentWrapper';
import Banner from '../../ui/Banner';
import CategoryList from '../../ui/category/CategoryList';
import SpaceCardList from '../../ui/spaceCard/SpaceCardList';

export default function Home() {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme`screens.lg`})`,
  });

  return (
    <HomeConatiner>
      <Section>
        <ContentWrapper>
          <Banner imageSet={BANNER_IMAGE_SET} />
        </ContentWrapper>
      </Section>

      <Section>
        <ContentWrapper>
          <CategoryList />
        </ContentWrapper>
        {isDesktop ? (
          <ContentWrapper>
            <SpaceCardList data={DUMMY_SPACE_DATA} />
          </ContentWrapper>
        ) : (
          <SpaceCardList data={DUMMY_SPACE_DATA} />
        )}
      </Section>
    </HomeConatiner>
  );
}

const HomeConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: fit-content;
`;

const Section = styled.section``;
