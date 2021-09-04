import React, { ChangeEvent } from 'react';
import { Option } from '../../../models/types';

interface SelectProps {
  options: Option[];
  defaultValue: string;
  value: string;
  onChange: (value: string) => void;
}

const Select = ({ value, options, defaultValue, onChange }: SelectProps) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select value={value} onChange={onChangeHandler}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map(({ value, name }) => (
        <option value={value} key={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Select;
