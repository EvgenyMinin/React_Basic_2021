import React, { ButtonHTMLAttributes, FC } from 'react';

import css from './Button.module.css';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return <button className={css.btn} {...props}>{children}</button>;
};

export default Button;
