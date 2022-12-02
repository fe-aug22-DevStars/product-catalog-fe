import React from 'react'

import homeIcon from '../../images/Home.png'
import arrowLeft from '../../images/ArrowLeft.png'
import styles from './Favourites.module.scss'

export const Favourites: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.topMenu}>
        <a href="/">
          <img src={homeIcon} alt="Home" />
        </a>
        <img src={arrowLeft} alt="Next" />
        <span className={styles.category__name}>Favourites</span>
      </div>
    </main>
  )
}
