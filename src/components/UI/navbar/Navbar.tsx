import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import { Button } from '../button';

import css from './Navbar.module.css';

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth && setIsAuth(false);
    localStorage.removeItem('authMyApp');
  };

  return (
    <nav className={css.navbar}>
      <div>
        <Link to="/about" className={css.link}>
          О Сайте
        </Link>
        <Link to="/posts" className={css.link}>
          Посты
        </Link>
      </div>
      {isAuth && <Button onClick={logout}>Выйти</Button>}
    </nav>
  );
};
