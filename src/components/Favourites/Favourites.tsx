import React, { useState, useEffect, useContext } from 'react';
import { ProductCard } from '../ProductCard';
import { getPhonesByIds } from '../../api/phones';
import { Phone } from '../../types/Phone';

import homeIcon from '../../images/Home.png';
import arrowRight from '../../images/ArrowRight.png';
import styles from './Favourites.module.scss';
import { Loader } from '../Loader';
import { StorageContext } from '../../context/StorageContext';

export const Favourites: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favouritesAmount, setFavouritesAmount] = useState(0);
  const { toFavourites } = useContext(StorageContext);

  async function loadPhones(): Promise<void> {
    try {
      setIsLoading(true);

      const favourites = localStorage.getItem('favourites');

      if (favourites === '[]') {
        setPhones([]);
      } else if (favourites) {
        const responseFromServer = await getPhonesByIds(favourites);

        setPhones(responseFromServer);
      }
    } catch (error) {
      throw new Error('No phones loaded');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadPhones();
  }, [favouritesAmount]);

  useEffect(() => {
    setFavouritesAmount(toFavourites.length);
  }, [toFavourites]);

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

        {isLoading && <Loader /> }

        {!isLoading
          && <div className={styles.goods}>
            {phones.length > 0
            && phones.map(phone =>
              <ProductCard
                key={phone.id}
                phone={phone}
              />)
            }
          </div>
        }
      </div>
    </main>
  );
};
