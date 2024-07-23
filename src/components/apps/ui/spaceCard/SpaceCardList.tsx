import { useMediaQuery } from 'react-responsive';
import { theme } from 'twin.macro';

import { CustomSwiper } from '../../swiper/CustomSwiper';
import SpaceCard, { SpaceCardProps } from './SpaceCard';

type SpaceCardListProps = {
  data: SpaceCardProps[];
};

export default function SpaceCardList({ data }: SpaceCardListProps) {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme`screens.lg`})`,
  });

  return (
    <CustomSwiper
      items={data.map((card, index) => {
        return <SpaceCard key={index} {...card} />;
      })}
      slidesPerView={isDesktop ? 3.02 : 1.3}
      spaceBetween={15}
      centeredSlides
      hasContentBoxShadow
    />
  );
}
