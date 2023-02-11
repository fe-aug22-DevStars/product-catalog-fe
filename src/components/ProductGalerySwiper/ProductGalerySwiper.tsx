import React, { useState } from 'react';
import { FreeMode, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ProductGalerySwiper.scss';
import 'swiper/css';
import 'swiper/scss/navigation';

type Props = {
  images: string[],
}

export const ProductGallerySwiper: React.FC<Props> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="gallery">
      <div className="swiper-main">
        <Swiper
          spaceBetween={15}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
        >
          {images.map((path) => (
            <SwiperSlide key={path}>
              <img
                src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${path}`}
                alt=""
                className="img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <Swiper
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
          slidesPerView={5}
          modules={[FreeMode, Thumbs]}
          freeMode
          slideClass="slide"
          breakpoints={{
            640: {
              direction: 'vertical',
            },
          }}
        >
          {images.map((path) => (
            <SwiperSlide key={path} className="slide">
              <div className="item">
                <img
                  src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${path}`}
                  alt=""
                  className="preview"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
