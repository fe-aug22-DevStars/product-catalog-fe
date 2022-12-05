import React from 'react';

import styles from './Pagination.module.scss';
import arrowLeft from '../../images/ArrowLeft.svg';
import arrowRight from '../../images/ArrowRight.svg';
import classNames from 'classnames';

interface Props {
  pageChange: (pageNumber: number) => any
  numberOfPages: number
  currentPage: number
}

export const Pagination: React.FC<Props> = ({
  pageChange,
  numberOfPages,
  currentPage,
}) => {
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
          className={
            classNames(styles.bottomMenuItem,
              { [styles.isActive]: (currentPage === number) })}
          onClick={(e) => {
            handleClick(e, number);
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
