import React from 'react'
import classNames from 'classnames'

export const List = ({users, handleClickUser, activeUser}) => {
  return (
    <ul className='list-users'>
      {users.map((user) => {
        const userClass = classNames('item', {
          'active' : user.id === (activeUser && activeUser.id)
        });
        return (
          <li 
          className='userClass'
          role='button'
          tabIndex='0'
          key={user.id}
          id={user.id}
          onClick={() => handleClickUser(user.id, user.name)}>
            <span>{user.name}</span>
          </li>
        );
      })}
    </ul>
  )
}