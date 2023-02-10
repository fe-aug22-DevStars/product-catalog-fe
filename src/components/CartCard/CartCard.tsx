import React from 'react';
import styles from './CartCard.module.scss';
import { Phone } from '../../types/Phone';
import remove from '../../assets/images/Close.svg';
import Minus from '../../assets/images/minus.svg';
import Plus from '../../assets/images/plus.svg';

interface Props {
  phone: Phone;
  handleRemove: (value: string)=>void;
  handlePlus: (value: string)=>void;
  handleMinus: (value: string)=>void;
  phonesSum: Phone[];
}

export const CartCard: React.FC<Props> = ({
  phone,
  handlePlus,
  handleMinus,
  handleRemove,
  phonesSum,
}) => (
  <>
    <div className={styles.cart}></div>
    <div className={styles.container}>
      <div className={styles.mobile_phone}>
        <a onClick={() => handleRemove(phone.id)}>
          <img src={remove} alt="Logo" className={styles.remove}/>
        </a>
        <img
          className={styles.image}
          src={`https://delightful-granita-7b1065.netlify.app/${phone.image}`}
          alt="phone"
        />
        <h2 className={styles.title}>
          {phone.name}
        </h2>
      </div>

      <div className={styles.mobile_add}>
        <div className={styles.add}>
          <a onClick={() => handleMinus(phone.id)}>
            <img src={Minus} alt="Logo" className={styles.minus}/>
          </a>
          <div className={styles.amount}>
            {phonesSum.filter(item => item.id === phone.id).length}
          </div>
          <a onClick={() => handlePlus(phone.id)}>
            <img src={Plus} alt="Logo" className={styles.plus}/>
          </a>
        </div>
        <h3 className={styles.price}>
          ${phone.price}
        </h3>
      </div>
    </div>
  </>
);
