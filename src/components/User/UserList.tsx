import { User } from '../../models/User';
import { userApi } from '../../services/UserService';
import { Button, Loader } from '../UI';
import { UserItem } from './UserItem';

export const UserList = () => {
  const { data, isLoading, isError } = userApi.useFetchAllUsersQuery(100);
  const [createUser, {}] = userApi.useCreateUserMutation();
  const [updateUser, {}] = userApi.useUpdateUserMutation();
  const [deleteUser, {}] = userApi.useDeleteUserMutation();

  const createUserHandler = async () => {
    const name = prompt();
    await createUser({ name, email: name } as User);
  };

  const handleRemove = (user: User) => {
    deleteUser(user);
  };

  const handleUpdate = (user: User) => {
    updateUser(user);
  };

  return (
    <div>
      {isLoading && <Loader />}

      {isError && <h1>Произошла ошибка, попробуйте позже</h1>}

      <Button onClick={createUserHandler}>Создать нового пользователя</Button>

      {data?.map(user => (
        <UserItem
          key={user.id}
          user={user}
          remove={handleRemove}
          update={handleUpdate}
        />
      ))}
    </div>
  );
};
