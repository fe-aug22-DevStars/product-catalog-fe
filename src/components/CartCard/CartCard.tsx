import React from 'react'
import styles from './Cart_card.module.scss'
import { Phone } from '../../types/Phone'

interface Props {
  phone: Phone
}

export const CartCard: React.FC<Props> = ({ phone }) => (
<>
<div className={styles.container}>

  <img
    className={styles.image}
    src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${phone.image}`}
    alt="phone"
  />
  <h2 className={styles.title}>
    {phone.name}
  </h2>
  <h3 className={styles.price}>
    ${phone.price} <span className={styles.full_price}>${phone.fullPrice}</span>
  </h3>

</div>
</>
)
