import React, { useContext } from 'react';
import userContext from '../Context/UserContext';

const Profile = () => {
  const { user } = useContext(userContext); 

  if (!user) return <div>Please First Login</div>;

  return <div className='welcome'>Welcome {user.username}</div>; 
};

export default Profile;
