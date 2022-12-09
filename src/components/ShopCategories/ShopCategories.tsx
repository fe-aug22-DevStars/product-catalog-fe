import { Link } from 'react-router-dom';
import phones from '../../images/Phones.jpg';
import tablets from '../../images/Tablets.jpg';
import accessories from '../../images/Accessories.jpg';
import styles from './ShopCategories.module.scss';
import { getAllPhones } from '../../api/phones';
import { useEffect, useState } from 'react';

export const ShopCategories = () => {
  const [amountOfPhones, setAmountOfPhones] = useState(0);
  const getPhonesAmount = async() => {
    const phonesFromServer = await getAllPhones();

    setAmountOfPhones(phonesFromServer.length);
  };

  useEffect(() => {
    getPhonesAmount();
  }, []);

  return (
    <div className={`${styles.categories} colorBlack`}>
      <div>
        <h2 className={styles.subheading}>Shop by category</h2>
        <div className={styles.container}>
          <div>
            <Link to="phones">
              <img
                src={phones}
                alt="smartphones picture"
                className={styles.picture}
              />
            </Link>
            <h4 className={styles.title}>Mobile phones</h4>
            <p
              className={`${styles.productAmount} colorGrey`}
            >{`${amountOfPhones} models`}</p>
          </div>
          <div>
            <Link to="tablets">
              <img
                src={tablets}
                alt="tablets picture"
                className={styles.picture}
              />
            </Link>
            <h4 className={styles.title}>Tablets</h4>
            <p className={`${styles.productAmount} colorGrey`}>24 models</p>
          </div>
          <div>
            <Link to="accessories">
              <img
                src={accessories}
                alt="accessories picture"
                className={styles.picture}
              />
            </Link>
            <h4 className={styles.title}>Accessories</h4>
            <p className={`${styles.productAmount} colorGrey`}>100 models</p>
          </div>
        </div>
      </div>
    </div>
  );
};
