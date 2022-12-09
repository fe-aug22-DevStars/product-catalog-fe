import React from 'react';
import styles from './Modal.module.scss';
import thank from '../../images/thank.gif';

type Props = {
    setOpenModal: (value: boolean) => void;
}

export const Modal:React.FC<Props> = ({ setOpenModal }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
                        X
          </button>
        </div>
        <div className={styles.body}>
          <p>Thanks for your order!</p>
          <img src={thank} alt='thanks' />
        </div>
        <div className={styles.footer}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
                        Cancel
          </button>
          <button>
            <a href='/' className={styles.back}>Back</a>
          </button>
        </div>
      </div>
    </div>
  );
};
