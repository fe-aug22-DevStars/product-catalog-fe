import React, { useState, useEffect } from 'react'
import { getPaginated } from '../../api/phones'
import { Phone } from '../../types/Phone'
import { ProductCard } from '../ProductCard'

import styles from './Catalog.module.scss'
import homeIcon from '../../images/Home.png'
import arrowLeft from '../../images/ArrowLeft.png'
import arrowRight from '../../images/ArrowRight.png'

export const Catalog: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([])
  const [selectedAmount, setSelectedAmount] = useState(16)

  async function loadPhones (): Promise<any> {
    const phonesFromServer = await getPaginated(selectedAmount, 1)

    setPhones(phonesFromServer)
  }

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedAmount(+event.target.value)
  }

  useEffect(() => {
    void loadPhones()
  })

  return (
    <main className={styles.main}>
      <div className={styles.topMenu}>
        <a href="/">
          <img src={homeIcon} alt="Home" />
        </a>
        <img src={arrowLeft} alt="Next" />
        <span className={styles.category__name}>Phones</span>
      </div>

      <h1 className={styles.header}>Mobile phones</h1>

      <h3 className={styles.subHeader}>95 models</h3>

      <div className={styles.view}>
        <div className={styles.viewByOrder}>
          <label htmlFor="sorts" className={styles.view__title}>Sort by</label>
          <select
            name="sorts"
            id="sorts"
            className={styles.view__select}
          >
            <option value="Newest">Newest</option>
            <option value="Alphabetically">Alphabetically</option>
            <option value="Cheapest">Cheapest</option>
          </select>
        </div>
        <div className={styles.viewByNumber}>
          <label htmlFor="number" className={styles.view__title}>Items on page</label>
          <select
            name="number"
            id="number"
            className={styles.view__select}
            value={selectedAmount}
            onChange={handleSelect}
          >
            <option value="All">All</option>
            <option value="16">16</option>
            <option value="8">8</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <div className={styles.goods}>
        {phones.map(phone => <ProductCard key={phone.id} phone={phone}/>)}
      </div>
      <div className={styles.bottomMenu}>
        <a href="/">
          <img
            src={arrowLeft}
            alt="Left"
            className={styles.bottomMenuArrow}
          />
        </a>
        <a href="/" className={styles.bottomMenuItem}>1</a>
        <a href="/" className={styles.bottomMenuItem}>2</a>
        <a href="/" className={styles.bottomMenuItem}>3</a>
        <a href="/" className={styles.bottomMenuItem}>4</a>
        <a href="/">
          <img
            src={arrowRight}
            alt="Right"
            className={styles.bottomMenuArrow}
          />
        </a>
      </div>
    </main>
  )
}
