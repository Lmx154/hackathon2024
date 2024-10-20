import { useState, useEffect } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx'
import { getUsers, addUser } from './api/apiService';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();  // Call the API service function
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    const newUser = {
      username: 'new_user',
      email: 'new_user@example.com',
      first_name: 'New',
      last_name: 'User',
    };

    try {
      await addUser(newUser);  // Call the API service function
      const updatedUsers = await getUsers();  // Fetch updated user list
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App
