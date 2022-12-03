import React, { useState } from 'react';

import styles from './Header.module.scss';
import Logo from '../../images/NiceGadgets.svg';
import ok from '../../images/ok.svg';
import menu from '../../images/Menu.svg';
import cancel from '../../images/cancel.svg';
import favourites from '../../images/Favourites.svg';
import cart from '../../images/ShoppingBag.svg';
import { BurgerMenu } from '../BurgerMenu';

export const Header: React.FC = () => {
  // eslint-disable-next-line no-shadow
  const [open, setOpen] = useState(false);

  const toggleMenu = (): void => {
    setOpen(!open);
  };

  return (
    <>
      <header className={styles.header} id='header'>
        <div className={styles.header__container}>
          <a href="#home" className={styles.logo}>
            <img src={Logo} alt="Nice gadgets logo" />
            <img src={ok} alt="Logo" className={styles.header__okIcon} />
          </a>

          <nav className="nav">
            <ul className={styles.nav__list}>
              <li>
                <a href="/home" className={`${styles.nav__link} colorGrey`}>
                  Home
                </a>
              </li>

              <li>
                <a href="/phones" className={`${styles.nav__link} ${styles['is-active']} colorGrey`}>
                  Phones
                </a>
              </li>

              <li>
                <a href="/tablets" className={`${styles.nav__link} colorGrey`}>
                  Tablets
                </a>
              </li>

              <li>
                <a href="/accesories" className={`${styles.nav__link} colorGrey`}>
                  Accessories
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.buttons}>
          <a href="/favourites" className={`${styles.buttons__button}`}>
            <img src={favourites} alt="icon" />
          </a>
          <a
            href="#menu"
            className={styles.buttons__button}
            onClick={toggleMenu}
          >
            {!open
              ? <img src={menu} alt="icon" />
              : <img src={cancel} alt="icon" />
            }
          </a>
          <a href="#cart" className={styles.buttons__button}>
            <img src={cart} alt="icon" />
          </a>
        </div>
      </header>
      {
        open && (
          <BurgerMenu open={open} />
        )
      }
    </>
  );
};
