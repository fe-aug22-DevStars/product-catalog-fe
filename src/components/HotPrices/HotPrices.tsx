import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { getAllPhones } from '../../api/phones';
import { ProductCard } from '../ProductCard';
import { Phone } from '../../types/Phone';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rightNext from '../../images/rightNext.svg';
import leftBack from '../../images/leftBack.svg';

import styles from './Hotprices.module.scss';

export const HotPrices: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
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

  async function loadPhones(): Promise<any> {
    const responseFromServer = await getAllPhones();
    const filteredPhones = responseFromServer
      .filter(phone => phone.price % 2 === 0).slice(0, 9);

    setPhones(filteredPhones);
  }

  useEffect(() => {
    loadPhones();
  }, []);

  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hot prices</h1>
        <div className={styles.button_container}>
          <a className={styles.button_1}
            // @ts-ignore
            onClick={() => sliderRef.current.slickPrev()}
          >
            <img src={leftBack} alt="leftBack" className={styles.arrow} />
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
