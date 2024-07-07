import Image from 'next/image';
import { styled } from 'twin.macro';

import { CustomSwiper } from '../swiper/CustomSwiper';

type ImageSetType = {
  src: string;
  alt: string;
};

type BannerProps = {
  imageSet: ImageSetType[];
  className?: string;
};

export default function Banner({ imageSet, className }: BannerProps) {
  const imageElements = imageSet.map((image, index) => (
    <ImageWrapper key={index} className={className}>
      <Image
        priority
        src={image.src}
        alt={image.alt}
        fill
        sizes="50vw"
        style={{
          minWidth: 520,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          objectFit: 'cover',
          overflow: 'hidden',
        }}
      />
    </ImageWrapper>
  ));

  return (
    <CustomSwiper
      autoplay
      items={imageElements}
      tw="[box-shadow:  rgba(50, 50, 93, 0.15) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;] [border-radius: 20px] overflow-hidden"
    />
  );
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  aspect-ratio: 1128 / 200;
`;
