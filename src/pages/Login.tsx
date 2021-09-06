import React from 'react';
import { Button, Input } from '../components';

export const Login = () => {
  return (
    <div>
      <h1>Страница для логина</h1>
      <form>
        <Input placeholder="Введите логин" />
        <Input type="password" placeholder="Введите пароль" />
        <Button>Войти</Button>
      </form>
    </div>
  );
};
