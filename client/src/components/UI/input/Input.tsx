import React, { InputHTMLAttributes } from 'react';

import css from './Input.module.css';

export const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className={css.input} />;
};
