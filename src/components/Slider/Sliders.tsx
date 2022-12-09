import React from 'react';
import Slider from 'react-slick';
import { Phone } from '../../types/Phone';
import leftBack from '../../images/leftBack.svg';
import rightNext from '../../images/rightNext.svg';
import { ProductCard } from '../ProductCard';
import styles from './Sliders.module.scss';

type Props = {
  phones: Phone[];
  title: string;
}

export const Sliders: React.FC<Props> = ({ phones, title }) => {
  const customSlider = React.createRef();

  const gotoNext = () => {
    // @ts-ignore
    customSlider.current.slickNext();
  };

  const gotoPrev = () => {
    // @ts-ignore
    customSlider.current.slickPrev();
  };

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
            onClick={() => gotoPrev()}
          >
            <img src={leftBack} alt="leftBack" className={styles.arrow} />
          </a>
          <a className={styles.button}
            onClick={() => gotoNext()}
          >
            <img src={rightNext} alt="rightNext" className={styles.arrow} />
          </a>
        </div>
      </div>
      <div className={styles.phones}>
        <Slider
          {...settings}
          // @ts-ignore
          ref={customSlider}
        >

          {phones.map(phone =>
            <ProductCard key={phone.id} phone={phone}/>)}
        </Slider>
      </div>
    </div>

  );
};
