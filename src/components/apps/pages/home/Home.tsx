import { useMediaQuery } from 'react-responsive';
import { styled, theme } from 'twin.macro';

import { useAuthLoginMutation } from '@/apis/auth';

import { BANNER_IMAGE_SET, DUMMY_SPACE_DATA } from '@/data/constant';

import ContentWrapper from '../../layout/ContentWrapper';
import Banner from '../../ui/Banner';
import SpaceCardList from '../../ui/spaceCard/SpaceCardList';

export default function Home() {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme`screens.lg`})`,
  });

  const authLoginMutation = useAuthLoginMutation();

  const loginTest = () => {
    authLoginMutation.mutate({
      email: 'test@naver.com',
      password: '!234qwer',
    });
  };

  return (
    <HomeConatiner>
      <div onClick={() => loginTest()}>로그인 테스트</div>
      <Section>
        <ContentWrapper>
          <Banner imageSet={BANNER_IMAGE_SET} />
        </ContentWrapper>
      </Section>

      <Section>
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
