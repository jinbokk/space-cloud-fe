import { styled } from 'twin.macro';

import { Banner } from '../../ui/Banner';
import SpaceCard from '../../ui/SpaceCard';

export default function Home() {
  return (
    <HomeConatiner>
      <Section>
        <Banner imageSet={BANNER_IMAGE_SET} />
      </Section>

      <Section>
        <SpaceCard />
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

const BANNER_IMAGE_SET = [
  {
    src: 'https://kr.object.ncloudstorage.com/scloud-service/service/171461477_66b327fe74ce1bae4899c2f6701d9931.png',
    alt: 'main-banner-1',
  },
  {
    src: 'https://kr.object.ncloudstorage.com/scloud-service/service/171461474_7f36a006eb8edb5b6e014c5b8074ce8b.png',
    alt: 'main-banner-2',
  },
  {
    src: 'https://kr.object.ncloudstorage.com/scloud-service/service/171738076_a7fcd121844786280e1b1db1ed797f46.png',
    alt: 'main-banner-1',
  },
];
