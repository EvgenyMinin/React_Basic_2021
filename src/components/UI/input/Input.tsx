import React, { InputHTMLAttributes } from 'react';

import css from './Input.module.css';

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className={css.input} />;
};

export default Input;
