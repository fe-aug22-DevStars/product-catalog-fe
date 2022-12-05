import React from 'react';
import styles from './CartCard.module.scss';
import { Phone } from '../../types/Phone';
import remove from '../../images/Close.svg';
import Minus from '../../images/minus.svg';
import Plus from '../../images/plus.svg';

interface Props {
  phone: Phone
}

export const CartCard: React.FC<Props> = ({ phone }) => (
  <>
    <div className={styles.cart}></div>
    <div className={styles.container}>
      <div className={styles.mobile_phone}>
        <a >
          <img src={remove} alt="Logo" className={styles.remove} />
        </a>
        <img
          className={styles.image}
          src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${phone.image}`}
          alt="phone"
        />
        <h2 className={styles.title}>
          {phone.name}
        </h2>
      </div>

      <div className={styles.mobile_add}>
        <div className={styles.add}>
          <a >
            <img src={Minus} alt="Logo" className={styles.minus} />
          </a>
          <div className={styles.amount}>1</div>
          <a >
            <img src={Plus} alt="Logo" className={styles.plus} />
          </a>
        </div>
        <h3 className={styles.price}>
        ${phone.price}
        </h3>
      </div>
    </div>
  </>
);
