import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { Input, Select } from './UI';

import { Filter, Option } from '../models/types';
import css from './PostFilter.module.css';

const sortOptions: Option[] = [
  { value: 'title', name: 'По названию' },
  { value: 'body', name: 'По описанию' },
];

interface PostFilterProps {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}

export const PostFilter = ({ filter, setFilter }: PostFilterProps) => {
  const sortPost = (sort: string) => {
    setFilter({ ...filter, sort });
  };

  const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, query: e.target.value });
  };
  return (
    <div className={css.selectContainer}>
      <Input
        value={filter.query}
        onChange={onSearchHandler}
        placeholder="Поиск"
      />
      <Select
        value={filter.sort}
        onChange={sortPost}
        defaultValue="Сортировка"
        options={sortOptions}
      />
    </div>
  );
};
