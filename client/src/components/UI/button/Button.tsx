import React, { ButtonHTMLAttributes, FC } from 'react';

import css from './Button.module.css';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button className={css.btn} {...props}>
      {children}
    </button>
  );
};
