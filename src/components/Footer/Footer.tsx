import React from 'react';
import classNames from 'classnames';

import styles from './Footer.module.scss';
import Up from '../../assets/images/Up.svg';
import Logo from '../../assets/images/logo.svg';
import '../../styles/fonts/Mont-Bold.otf';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utilities/scrollToTop';

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <Link to='/' className={styles.logo_container}>
        <img src={Logo} alt="Logo" className={styles.logo}/>
      </Link>

      <div className={styles.text_container}>
        <a
          href="https://github.com/fe-aug22-DevStars/product-catalog-fe"
          target="_blank"
          className={styles.text}
        >
          GITHUB
        </a>
        <Link
          to="/"
          className={classNames(styles.text, styles.text_mobile)}
        >
          CONTACTS
        </Link>
        <Link to="/" className={styles.text}>RIGHTS</Link>
      </div>

      <div className={styles.up_container}>
        <button
          className={styles.text}
          onClick={scrollToTop}
        >
          Back to top

          <img src={Up} alt="Up" className={styles.up}/>
        </button>
      </div>

    </div>
  </footer>
);
