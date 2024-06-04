import Image from 'next/image';
import React from 'react';
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
  ));

  return <CustomSwiper items={imageElements} />;
}

const ImageWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  aspect-ratio: 1128 / 200;
  box-shadow:
    rgba(50, 50, 93, 0.15) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;
`;
