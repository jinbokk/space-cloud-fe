import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { SwiperProps } from 'swiper/react';
import { styled, theme } from 'twin.macro';

interface CustomSwiperProps extends SwiperProps {
  items: any;
}

export const CustomSwiper = ({
  items,
  slidesPerView = 1,
  spaceBetween = 0,
  autoplay,
}: CustomSwiperProps) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrev = () => {
    swiperRef?.slidePrev();
  };

  const handleNext = () => {
    swiperRef?.slideNext();
  };
  return (
    <CustomSwiperContainer>
      <StyledSwiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop
        modules={[Autoplay]}
        autoplay={autoplay && { delay: 3000 }}
        speed={800}
        onSwiper={(swiper) => setSwiperRef(swiper)}
      >
        {items.map((item: any, index: number) => {
          return <CustomSwiperSlide key={index}>{item}</CustomSwiperSlide>;
        })}
      </StyledSwiper>

      <PrevButton onClick={handlePrev}></PrevButton>
      <NextButton onClick={handleNext}></NextButton>
    </CustomSwiperContainer>
  );
};

const CustomSwiperContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1128 / 200;
  cursor: pointer;
  .swiper {
    padding-bottom: 10px;
  }
`;

const StyledSwiper = styled(Swiper)`
  border-radius: 20px;
  padding: 24px 0;
`;

const CustomSwiperSlide = styled(SwiperSlide)``;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: -10px;
  transform: translateY(-50%);
  z-index: 1000;
  width: 25px;
  height: 25px;
  border-radius: 48px;
  cursor: pointer;
  background-size: cover;
  background-position: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07843);
  background-image: url(/images/icons/arrow-left.svg);
  @media (min-width: ${theme`screens.lg`}) {
    width: 32px;
    height: 32px;
    left: -15px;
  }
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translateY(-50%);
  z-index: 1000;
  width: 25px;
  height: 25px;
  border-radius: 48px;
  cursor: pointer;
  background-size: cover;
  background-position: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07843);
  background-image: url(/images/icons/arrow-right.svg);
  @media (min-width: ${theme`screens.lg`}) {
    width: 32px;
    height: 32px;
    right: -15px;
  }
`;
