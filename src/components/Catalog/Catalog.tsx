import React, { useState, useEffect } from 'react';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard';
import { Pagination } from '../Pagination';

import styles from './Catalog.module.scss';
import homeIcon from '../../images/Home.svg';
import arrowRight from '../../images/ArrowRight.svg';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader';

export const Catalog: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage, setPhonesPerPage] = useState('All');
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [fieldForSorting, setFieldForSorting] = useState('Newest');
  const [totalNumber, setTotalNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function loadPhones(): Promise<void> {
    setIsLoading(true);

    const responseFromServer = await getPhones(
      phonesPerPage,
      currentPage,
      fieldForSorting,
    );

    setPhones(responseFromServer.products);
    setNumberOfPages(responseFromServer.numberOfPages);
    setTotalNumber(responseFromServer.numberOfProducts);
    setIsLoading(false);
  }

  useEffect(() => {
    loadPhones();
  }, [phonesPerPage, currentPage, fieldForSorting]);

  const handleSelectNumber
    = (e: React.ChangeEvent<HTMLSelectElement>): void => {
      setIsLoading(true);
      setPhonesPerPage(e.target.value);
      setCurrentPage(1);
    };

  const handleSelectSort = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setIsLoading(true);
    setFieldForSorting(e.target.value);
    setCurrentPage(1);
  };

  const pageChange = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.topMenu}>
          <Link to="/">
            <img src={homeIcon} alt="Home" />
          </Link>
          <img src={arrowRight} alt="Next" />
          <span className={styles.category__name}>Phones</span>
        </div>

        <h1 className={styles.header}>Mobile phones</h1>

        <h3 className={styles.subHeader}>{totalNumber} models</h3>

        <div className={styles.view}>
          <div className={styles.viewByOrder}>
            <label htmlFor="sorts" className={styles.view__title}>
              Sort by
            </label>
            <select
              name="sorts"
              id="sorts"
              className={styles.view__select}
              value={fieldForSorting}
              onChange={handleSelectSort}
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
              onChange={handleSelectNumber}
            >
              <option value='All'>All</option>
              <option value='16'>16</option>
              <option value='8'>8</option>
              <option value='4'>4</option>
            </select>
          </div>
        </div>

        {isLoading && <Loader /> }

        {!isLoading
          && <>
            <div className={styles.goods}>
              {phones.length > 0
              && phones.map(phone =>
                <ProductCard
                  key={phone.id}
                  phone={phone}
                />)}
            </div>
            {phonesPerPage !== 'All'
              && <Pagination
                pageChange={pageChange}
                numberOfPages={numberOfPages}
                currentPage={currentPage}
              />
            }
          </>
        }
      </div>
    </main>
  );
};
