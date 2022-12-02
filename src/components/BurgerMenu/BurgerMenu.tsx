import React from 'react'
import styles from './Burger.module.scss'
import favourites from '../../images/Favourites.svg'
import shoppingBag from '../../images/ShoppingBag.svg'

interface Props {
  open: boolean
}

export const BurgerMenu: React.FC<Props> = ({ open }) => {
  return (
    <nav className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ul className={styles.menu__content}>
            <li className={styles.menu__item}>
              <a href="/" className={styles.menu__link}>HOME</a>
            </li>
            <li className={styles.menu__item}>
              <a href="/" className={styles.menu__link}>PHONES</a>
            </li>
            <li className={styles.menu__item}>
              <a href="/" className={styles.menu__link}>TABLETS</a>
            </li>
            <li className={styles.menu__item}>
              <a href="/" className={styles.menu__link}>ACCESSORIES</a>
            </li>

          </ul>
        </div>
        <div className={styles.footer__block}>
          <a href="#favourites" className={styles.footer__icon}>
            <img src={favourites} alt="icon" />
          </a>

          <a href="#shoppingCard" className={styles.footer__icon}>
            <img src={shoppingBag} alt="icon" />
          </a>

        </div>
      </div>
    </nav>
  )
}
