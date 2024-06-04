import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { styled, theme } from 'twin.macro';

type ImageSetType = {
  src: string;
  alt: string;
};

type BannerProps = {
  imageSet: ImageSetType[];
  className?: string;
};

export const Banner = ({ imageSet, className }: BannerProps) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrev = () => {
    swiperRef?.slidePrev();
  };

  const handleNext = () => {
    swiperRef?.slideNext();
  };
  return (
    <BannerContainer>
      <CustomSwiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        speed={800}
        onSwiper={(swiper) => setSwiperRef(swiper)}
      >
        {imageSet.map((image, index) => {
          return (
            <CustomSwiperSlide key={index}>
              <ImageWrapper className={className}>
                <Image
                  priority
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    objectFit: 'cover',
                  }}
                />
              </ImageWrapper>
            </CustomSwiperSlide>
          );
        })}
      </CustomSwiper>

      <PrevButton onClick={handlePrev}></PrevButton>
      <NextButton onClick={handleNext}></NextButton>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  aspect-ratio: 1128 / 200;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  aspect-ratio: 1128 / 200;
`;

const CustomSwiper = styled(Swiper)`
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    rgba(50, 50, 93, 0.15) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;
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
