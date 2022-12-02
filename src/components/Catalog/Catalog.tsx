import React, { useState, useEffect } from 'react'
import { getAllPhones } from '../../api/phones'
import { Phone } from '../../types/Phone'
import { ProductCard } from '../ProductCard'
import { Pagination } from '../Pagination'

import styles from './Catalog.module.scss'
import homeIcon from '../../images/Home.png'
import arrowLeft from '../../images/ArrowLeft.png'

export const Catalog: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [phonesPerPage, setPhonesPerPage] = useState(16)

  async function loadPhones (): Promise<any> {
    const phonesFromServer = await getAllPhones()

    setPhones(phonesFromServer)
  }

  useEffect(() => {
    void loadPhones()
  }, [])

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setPhonesPerPage(+event.target.value)
  }

  const lastPhoneIndex = currentPage * phonesPerPage
  const firstPhoneIndex = lastPhoneIndex - phonesPerPage
  const currentPhones = [...phones].slice(firstPhoneIndex, lastPhoneIndex)
  console.log(currentPage)

  const pageChange = (pageNumber: number): any => setCurrentPage(pageNumber)

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

      <h3 className={styles.subHeader}>{phones.length} models</h3>

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
            value={phonesPerPage}
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
        {currentPhones.map(phone => <ProductCard key={phone.id} phone={phone}/>)}
      </div>
      <Pagination
        phonesPerPage={phonesPerPage}
        totalPhones={phones.length}
        pageChange={pageChange}
      />
    </main>
  )
}
