import React, { useState, useEffect, useContext } from 'react';
import styles from './Cart.module.scss';
import right from '../../assets/images/right.svg';
import { Phone } from '../../types/Phone';
import { getPhonesByIds } from '../../api/phones';
import { CartCard } from '../CartCard';
import { Loader } from '../Loader';
import { Modal } from '../Modal';
import { StorageContext } from '../../context/StorageContext';
import { useNavigate } from 'react-router-dom';

export const Cart: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesSum, setPhonesSum] = useState<Phone[]>(phones);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartAmount, setCartAmount] = useState(0);
  const { toCart, setToCart } = useContext(StorageContext);
  const navigate = useNavigate();

  async function loadPhones(): Promise<any> {
    try {
      setIsLoading(true);

      const itemsFromCart = localStorage.getItem('cart');

      if (itemsFromCart === '[]') {
        setPhones([]);
      } else if (itemsFromCart) {
        const responseFromServer = await getPhonesByIds(itemsFromCart);

        setPhones(responseFromServer);
        setPhonesSum(responseFromServer);
      }
    } catch (error) {
      throw new Error('No phones loaded');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadPhones();
  }, [cartAmount]);

  useEffect(() => {
    setCartAmount(toCart.length);
  }, [toCart]);

  const handlePlus = (id: string) => {
    const addItems = phones.find((phone) => phone.id === id) || null;

    if (addItems) {
      setPhonesSum([...phonesSum, addItems]);
    }
  };

  const handleMinus = (id: string) => {
    const removeItem = phonesSum.find((phone) => phone.id === id) || null;
    const removeLength = phonesSum.filter((phone) => phone.id === id).length;

    if (removeLength <= 1) {
      return;
    }

    if (removeItem) {
      const index = phonesSum.indexOf(removeItem);

      if (index > -1) {
        phonesSum.splice(index, 1);

        setPhonesSum([...phonesSum]);
      }
    }
  };

  function removeFromCartStorage(id: string): void {
    const itemsFromCart = localStorage.getItem('cart');

    if (itemsFromCart == null) {
      return;
    }

    setToCart(id);
  }

  const handleRemove = (id: string) => {
    const removedItems = phones.filter((phone) => phone.id !== id);
    const removedPhoneSums = phonesSum.filter((phone) => phone.id !== id);

    setPhones(removedItems);
    setPhonesSum(removedPhoneSums);

    removeFromCartStorage(id);
  };

  const handleCheckout = () => {
    localStorage.removeItem('cart');

    setPhones([]);
    setModalOpen(true);
    setPhonesSum([]);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <div className={styles.back_container} onClick={handleBack}>
          <img src={right} alt="right" className={styles.back} />
          <span className={styles.back_name}>Back</span>
        </div>

        <p className={styles.name}>Cart</p>
        <div className={styles.total_container}>
          {isLoading && <Loader />}

          {!isLoading && (
            <div className={styles.phones_container}>
              {phones.length > 0 ? (
                phones.map((phone) => (
                  <CartCard
                    key={phone.id}
                    phone={phone}
                    handlePlus={handlePlus}
                    handleMinus={handleMinus}
                    handleRemove={handleRemove}
                    phonesSum={phonesSum}
                  />
                ))
              ) : (
                <p className={styles.emptyTitle}>Your cart is empty</p>
              )}
            </div>
          )}

          <div className={styles.sum_container}>
            <p className={styles.price}>
              {phonesSum.reduce((acc, item) => acc + item.price, 0)} $
            </p>

            <p className={styles.amount}>Total for {phonesSum.length} items</p>

            <div className={styles.line}></div>
            <button className={styles.checkout} onClick={handleCheckout}>
              Checkout
            </button>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
};
