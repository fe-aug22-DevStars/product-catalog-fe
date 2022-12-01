import React from 'react'

import styles from './Header.module.scss'
import Logo from '../../images/NiceGadgets.svg'
import ok from '../../images/ok.svg'
import menu from '../../images/Menu.svg'
import favourites from '../../images/Favourites.svg'
import cart from '../../images/ShoppingBag.svg'

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.header__container}>
      <a href="#home" className={styles.logo}>
        <img src={Logo} alt="Nice gadgets logo"/>
        <img src={ok} alt="Logo" className={styles.header__okIcon} />
      </a>

      <nav className="nav">
        <ul className={styles.nav__list}>
          <li>
            <a href="#home" className={`${styles.nav__link} colorGrey`}>
              Home
            </a>
          </li>

          <li>
            <a href="#phones" className={`${styles.nav__link} ${styles['is-active']} colorGrey`}>
              Phones
            </a>
          </li>

          <li>
            <a href="#tablets" className={`${styles.nav__link} colorGrey`}>
              Tablets
            </a>
          </li>

          <li>
            <a href="#accesories" className={`${styles.nav__link} colorGrey`}>
              Accesories
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div className={styles.buttons}>
      <a href="#favourites" className={`${styles.buttons__button}`}>
        <img src={favourites} alt="icon" />
      </a>
      <a href="#menu" className={styles.buttons__button}>
        <img src={menu} alt="icon" />
      </a>
      <a href="#cart" className={styles.buttons__button}>
        <img src={cart} alt="icon" />
      </a>
    </div>
  </header>
)
