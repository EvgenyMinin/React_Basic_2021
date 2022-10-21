import { User } from '../../models/User';
import { Button } from '../UI';

import css from './UserItem.module.css';

interface UserItemProps {
  user: User;
  remove: (user: User) => void;
  update: (user: User) => void;
}

export const UserItem = ({ user, remove, update }: UserItemProps) => {
  const removeUserHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(user);
  };

  const updateUserHandler = (e: React.MouseEvent) => {
    const name = prompt() || '';
    update({ ...user, name });
  };

  return (
    <div className={css.container} onClick={updateUserHandler}>
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div className={css.buttonContainer}>
        <Button className={css.deleteBtn} onClick={removeUserHandler}>
          Удалить
        </Button>
      </div>
    </div>
  );
};
