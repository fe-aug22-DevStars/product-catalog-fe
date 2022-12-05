import React, { useState, useEffect } from 'react';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard';
import { Pagination } from '../Pagination';

import styles from './Catalog.module.scss';
import homeIcon from '../../images/Home.svg';
import arrowRight from '../../images/ArrowRight.svg';
import { Link } from 'react-router-dom';

export const Catalog: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage, setPhonesPerPage] = useState(4);
  const [numberOfPages, setNumberOfPages] = useState(0);

  async function loadPhones(): Promise<any> {
    const responseFromServer = await getPhones(phonesPerPage, currentPage);

    setPhones(responseFromServer.products);
    setNumberOfPages(responseFromServer.numberOfPages);
  }

  useEffect(() => {
    void loadPhones();
  }, [phonesPerPage, currentPage]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setPhonesPerPage(+e.target.value);
  };

  const pageChange = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <main className={styles.main}>
      <div className={styles.topMenu}>
        <Link to="/">
          <img src={homeIcon} alt="Home" />
        </Link>
        <img src={arrowRight} alt="Next" />
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
          <label
            htmlFor="number"
            className={styles.view__title}
          >
            Items on page
          </label>
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
        {phones.map(phone => <ProductCard key={phone.id} phone={phone}/>)}
      </div>
      <Pagination
        pageChange={pageChange}
        numberOfPages={numberOfPages}
      />
    </main>
  );
};
