import React from 'react';

import styles from './Pagination.module.scss';
import arrowLeft from '../../images/ArrowLeft.png';
import arrowRight from '../../images/ArrowRight.png';

interface Props {
  pageChange: (pageNumber: number) => any
  numberOfPages: number
}

export const Pagination: React.FC<Props> = ({ pageChange, numberOfPages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick
    // eslint-disable-next-line max-len,no-shadow
    = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, number: number): void => {
      event.preventDefault();
      pageChange(number);
    };

  return (
    <div className={styles.bottomMenu}>
      <a href="/">
        <img
          src={arrowLeft}
          alt="Left"
          className={styles.bottomMenuArrow}
        />
      </a>
      {pageNumbers.map(number => (
        <a
          href={`/phones/?page=${number}`}
          key={number}
          className={styles.bottomMenuItem}
          onClick={(event) => {
            handleClick(event, number);
          }}
        >
          {number}
        </a>
      ))}
      <a href="/">
        <img
          src={arrowRight}
          alt="Right"
          className={styles.bottomMenuArrow}
        />
      </a>
    </div>
  );
};
