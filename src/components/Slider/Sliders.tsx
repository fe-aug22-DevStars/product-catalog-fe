import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Phone } from '../../types/Phone';
import rightNext from '../../images/rightNext.svg';
import { ProductCard } from '../ProductCard';
import styles from './Sliders.module.scss';

type Props = {
  phones: Phone[];
  title: string;
}

export const Sliders: React.FC<Props> = ({ phones, title }) => {
  const sliderRef = useRef(null);

  const settings = {
    ref: sliderRef,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <div className={styles.button_container}>
          <a className={styles.button_1}
            // @ts-ignore
            onClick={() => sliderRef.current.slickPrev()}
          >
            <img src={rightNext} alt="leftBack" className={styles.arrow1} />
          </a>
          <a className={styles.button}
            // @ts-ignore
            onClick={() => sliderRef.current.slickNext()}
          >
            <img src={rightNext} alt="rightNext" className={styles.arrow} />
          </a>
        </div>
      </div>
      <div className={styles.phones}>
        <Slider
          {...settings}
        >

          {phones.map(phone =>
            <ProductCard key={phone.id} phone={phone}/>)}
        </Slider>
      </div>
    </div>

  );
};
