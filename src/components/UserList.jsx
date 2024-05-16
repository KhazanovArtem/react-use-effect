import React, { useEffect, useState } from 'react';
import { Details } from './Details';
import {List} from './List'

export const UserList = () => {

  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_REACT_APP_USERS)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleClickUser = (id, name) => {
    setActiveUser({ id: id, name: name });
  }

  return (
    <div className='container'>
      <List
        users={users}
        handleClickUser={handleClickUser}
        activeUser={activeUser}
      />
      {activeUser && <Details info={activeUser} />}
    </div>
  )
}
