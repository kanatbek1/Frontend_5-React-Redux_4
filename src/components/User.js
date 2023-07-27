import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserOneInfo, setSelectedUserAction } from '../redux/actions/actions';

function User({ userInfo }) {
  const dispatch = useDispatch();
  const getOneUser = () => {
    dispatch(fetchUserOneInfo(userInfo.id));
    dispatch(setSelectedUserAction(userInfo)); 
  };
  return (
    <ul>
      <li>name: {userInfo.name}</li>
      <li>email: {userInfo.email}</li>
      <li>
        <button onClick={getOneUser}>get more</button>
      </li>
    </ul>
  );
}

export default User;



