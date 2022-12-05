
import React from 'react';
import styles from './Cart.module.scss';
import right from '../../images/right.svg';

// import { Phone } from '../../types/Phone'
// import { getAllPhones } from '../../api/phones'
// import { ProductCard } from '../ProductCard'

export const Cart: React.FC = () => {
  // const [phones, setPhones] = useState<Phone[]>([])
  //
  // async function loadPhones (): Promise<any> {
  //   const phonesFromServer = await getAllPhones()
  //
  //   setPhones(phonesFromServer)
  // }

  // useEffect(() => {
  //   void loadPhones()
  // }, [])

  return (
    <>

      <div className={styles.container}>
        <div className={styles.back_container}>
          <a href='/'>
            <img src={right} alt="Up" className={styles.back} />
          </a>
          <a href='/' className={styles.back_name}>Back</a>
        </div>

        <p className={styles.name}>
          Cart
        </p>
        <div className={styles.total_container}>

          <div className={styles.phones_container}>

          </div>
          <div className={styles.sum_container}>
            <p className={styles.price}>2556$</p>

            <p className={styles.amount}>Total for 3 items</p>
            <div className={styles.line}></div>
            <button className={styles.checkout}>
            Checkout
            </button>
          </div>
        </div>
      </div>

    </>
  );
};
