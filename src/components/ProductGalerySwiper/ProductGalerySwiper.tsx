import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ProductGalerySwiper.module.scss';
import 'swiper/css';
import 'swiper/scss/navigation';

type Props = {
  images: string[],
}

export const ProductGallerySwiper: React.FC<Props> = ({ images }) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        <Swiper
          spaceBetween={10}
        >
          {images.map((path) => (
            <SwiperSlide key={path}>
              <img
                src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${path}`}
                alt=""
                className={styles.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          freeMode
          slideClass={styles.slide}
          breakpoints={{
            640: {
              direction: 'vertical',
            },
          }}
        >
          {images.map((path) => (
            <SwiperSlide key={path} className={styles.slide}>
              <div className={styles.item}>
                <img
                  src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${path}`}
                  alt=""
                  className={styles.preview}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
