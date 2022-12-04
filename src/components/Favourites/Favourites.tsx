
import React, { useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard';
import { getAllPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';

import homeIcon from '../../images/Home.png';
import arrowRight from '../../images/ArrowRight.png';
import styles from './Favourites.module.scss';

export const Favourites: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  async function loadPhones(): Promise<any> {
    const responseFromServer = await getAllPhones();

    setPhones(responseFromServer.slice(0, 5));
  }

  useEffect(() => {
    void loadPhones();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.topMenu}>
          <a href="/">
            <img src={homeIcon} alt="Home" />
          </a>
          <img src={arrowRight} alt="Next" />
          <span className={styles.category__name}>Favourites</span>
        </div>

        <h1 className={styles.header}>Favourites</h1>

        <h3 className={styles.subHeader}>{phones.length} items</h3>

        <div className={styles.goods}>
          {phones.map(phone => <ProductCard key={phone.id} phone={phone} />)}
        </div>
      </div>
    </main>
  );
};
