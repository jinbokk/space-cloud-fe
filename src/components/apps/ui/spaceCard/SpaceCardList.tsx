import { CustomSwiper } from '../../swiper/CustomSwiper';
import SpaceCard, { SpaceCardProps } from './SpaceCard';

type SpaceCardListProps = {
  data: SpaceCardProps[];
};

export default function SpaceCardList({ data }: SpaceCardListProps) {
  return (
    <CustomSwiper
      items={data.map((card, index) => (
        <SpaceCard key={index} {...card} />
      ))}
      slidesPerView={3}
      spaceBetween={15}
    />
  );
}
