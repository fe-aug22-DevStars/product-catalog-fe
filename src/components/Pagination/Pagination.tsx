import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

interface Props {
  pageChange: (pageNumber: number) => void
  numberOfPages: number
  currentPage: number
}

export const Pagination: React.FC<Props> = ({
  pageChange,
  numberOfPages,
  currentPage,
}) => {
  // eslint-disable-next-line no-console
  console.log('currentPage', currentPage);

  const pageNumbers = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (e: { selected: number; }) => {
    pageChange(e.selected);

    // eslint-disable-next-line no-console
    console.log(currentPage, 'e.selected', e.selected);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      forcePage={currentPage}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={numberOfPages}
      previousLabel="<"
      containerClassName={styles.bottomMenu}
      pageClassName={styles.bottomMenuItem}
      activeClassName={styles.isActive}
      previousClassName={styles.bottomMenuArrow}
      nextClassName={styles.bottomMenuArrow}
      breakClassName={styles.bottomMenuItem}
    />
  );
};
