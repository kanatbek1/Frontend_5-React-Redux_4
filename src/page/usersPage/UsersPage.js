import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from '../../components/User';
import { fetchUsersAction } from '../../redux/actions/actions';
import '../../App.css'; 
function UsersPage() {
  const dispatch = useDispatch();
  const { users, selectedUser } = useSelector(state => state.usersReducer);
  const getUsers = () => {
    dispatch(fetchUsersAction());
  };
  return (
    <div>
      {selectedUser && (
        <div>
          <h2>Информация о выбранном пользователе</h2>
          <ul>
            <li>Имя: {selectedUser.name}</li>
            <li>Email: {selectedUser.email}</li>
            {selectedUser.address && (
              <li>
                Адрес: {selectedUser.address.street}, {selectedUser.address.suite},{' '}
                {selectedUser.address.city}, {selectedUser.address.zipcode}
              </li>
            )}
            {selectedUser.address && selectedUser.address.geo && (
              <li>
                Координаты: {selectedUser.address.geo.lat}, {selectedUser.address.geo.lng}
              </li>
            )}
          </ul>
        </div>
      )}
      <ul>
        <li>Имя:</li>
        <li>Email:</li>
        <li>Адрес:</li>
        <li>Координаты:</li>
      </ul>
      <button onClick={getUsers}>Получить пользователей</button>
      {users.map(user => <User userInfo={user} key={user.id} />)}
    </div>
  );
}

export default UsersPage;










