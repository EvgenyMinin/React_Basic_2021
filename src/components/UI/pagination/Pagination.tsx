import React from 'react';
import { usePagination } from '../../../hooks';

import { Button } from '../button';

import css from './Pagination.module.css';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  changePage: (page: number) => void;
}

export const Pagination = ({
  totalPages,
  currentPage,
  changePage,
}: PaginationProps) => {
  const pagesArray = usePagination(totalPages);

  return (
    <div className={css.paginationContainer}>
      {pagesArray.map(p => (
        <Button
          key={p}
          onClick={() => changePage(p)}
          className={currentPage === p ? css.pageActive : css.currentPage}
        >
          {p}
        </Button>
      ))}
    </div>
  );
};
