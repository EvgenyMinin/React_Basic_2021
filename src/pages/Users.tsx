import { Loader } from '../components';
import { UserItem } from '../components/User';
import { userApi } from '../services/UserService';

export const Users = () => {
  const { data, isLoading, isError } = userApi.useFetchAllUsersQuery(5);
  return (
    <div>
      {isLoading && <Loader />}
      {isError && <h1>Произошла ошибка, попробуйте позже</h1>}
      {data?.map(user => (
        <UserItem key={user.id} {...user} />
      ))}
    </div>
  );
};
