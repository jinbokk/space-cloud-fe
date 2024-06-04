import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { SwiperProps } from 'swiper/react';
import { css, styled, theme } from 'twin.macro';

interface CustomSwiperProps extends SwiperProps {
  items: any;
  className?: string;
  hasContentBoxShadow?: boolean;
}

export const CustomSwiper = ({
  items,
  className,
  hasContentBoxShadow = false,
  slidesPerView = 1,
  spaceBetween = 0,
  autoplay,
  ...props
}: CustomSwiperProps) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrev = () => {
    swiperRef?.slidePrev();
  };

  const handleNext = () => {
    swiperRef?.slideNext();
  };
  return (
    <CustomSwiperContainer hasContentBoxShadow={hasContentBoxShadow}>
      <StyledSwiperWrapper className={className}>
        <StyledSwiper
          {...props}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          loop
          modules={autoplay ? [Autoplay] : []}
          autoplay={autoplay ? { delay: 3000 } : false}
          speed={800}
          onSwiper={(swiper) => setSwiperRef(swiper)}
        >
          {items.map((item: any, index: number) => {
            return <CustomSwiperSlide key={index}>{item}</CustomSwiperSlide>;
          })}
        </StyledSwiper>
      </StyledSwiperWrapper>
      <PrevButton onClick={handlePrev}></PrevButton>
      <NextButton onClick={handleNext}></NextButton>
    </CustomSwiperContainer>
  );
};

const CustomSwiperContainer = styled.div<{
  hasContentBoxShadow: boolean;
}>`
  position: relative;
  width: 100%;
  aspect-ratio: 1128 / 200;
  cursor: pointer;

  ${({ hasContentBoxShadow }) =>
    hasContentBoxShadow &&
    css`
      padding-bottom: -10px;
      & button {
        display: none;
        @media (min-width: ${theme`screens.lg`}) {
          display: block;
          top: calc(50% - 10px);
        }
      }
      & .swiper-slide {
        padding-bottom: 10px;
      }
    `};
`;

const StyledSwiperWrapper = styled.div``;

const StyledSwiper = styled(Swiper)``;

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
