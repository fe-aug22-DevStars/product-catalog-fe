
import React, { useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard';
import { getFavourites } from '../../api/phones';
import { Phone } from '../../types/Phone';

import homeIcon from '../../images/Home.png';
import arrowRight from '../../images/ArrowRight.png';
import styles from './Favourites.module.scss';
import { Link } from 'react-router-dom';

export const Favourites: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  async function loadPhones(): Promise<any> {
    const favourites = localStorage.getItem('favourites');

    if (favourites) {
      const responseFromServer = await getFavourites(favourites);

      setPhones(responseFromServer);
    }
  }

  useEffect(() => {
    void loadPhones();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.topMenu}>
          <Link to="/">
            <img src={homeIcon} alt="Home" />
          </Link>
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
