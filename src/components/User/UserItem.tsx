import { User } from '../../models/User';
import { Button } from '../UI';

import css from './UserItem.module.css';

export const UserItem = ({ name, email }: User) => {
  return (
    <div className={css.container}>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      <div className={css.buttonContainer}>
        <Button className={css.deleteBtn}>Удалить</Button>
      </div>
    </div>
  );
};
