import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Link } from 'react-router-dom';

import styles from './GreetingSlider.module.scss';

export const GreetingSlider: React.FC = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.wrapper}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          loop
          className={styles.swiper}
        >
          <SwiperSlide>
            <Link
              to="/phones"
              className={`${styles.image} ${styles.image_1}`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="/tablets"
              className={`${styles.image} ${styles.image_2}`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="/accessories"
              className={`${styles.image} ${styles.image_3}`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
