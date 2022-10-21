import React, { SyntheticEvent, useContext } from 'react';
import { Button, Input } from '../components';
import { AuthContext } from '../context';

export const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (e: SyntheticEvent) => {
    e.preventDefault();
    localStorage.setItem('authMyApp', 'true');
    setIsAuth && setIsAuth(true);
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <Input placeholder="Введите логин" />
        <Input type="password" placeholder="Введите пароль" />
        <Button>Войти</Button>
      </form>
    </div>
  );
};
