import React from 'react'
import { useState, useEffect } from 'react';

export const Details = ({ info }) => {
  const [avatar, setAvatar] = useState('');
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    setAvatar('');
    fetch(import.meta.env.VITE_REACT_APP_USERS_DETAILS + `/${info.id}.json`)
    .then(response => response.json())
    .then(data => {
      setUserDetails(data.details);
      setAvatar(data.avatar);
    })
  }, [info.id])

  return (
    <div className='card '>
      <img src={avatar} className='card-img-top' alt={info.name} />
      <div className='card-body'>
        <h3 className='card-title'>{info.name}</h3>
        <p className='card-text'>City: {userDetails.city}</p>
        <p className='card-text'>Company: {userDetails.company}</p>
        <p className='card-text'>Position: {userDetails.position}</p>
      </div>
    </div>
  );
}
