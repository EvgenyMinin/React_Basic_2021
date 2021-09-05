import React from 'react';
import { Link } from 'react-router-dom';

import css from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <Link to="/about" className={css.link}>О Сайте</Link>
      <Link to="/posts" className={css.link}>Посты</Link>
    </nav>
  );
};
