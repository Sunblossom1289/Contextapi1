import React from 'react';
import UserContextProvider from './Context/UserContextProvider';
import Login from './Components/Login';
import Profile from './Components/Profile';
import './App.css'
const App = () => {
  return (
    
    <UserContextProvider>
       <h1>Hello ,Please Login First!</h1>
      <Login />
      <Profile />
     
    </UserContextProvider>
  );
};

export default App;
