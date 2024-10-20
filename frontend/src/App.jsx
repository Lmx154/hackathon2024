import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Form from './Form.jsx';
import { getUsers, addUser } from './api/apiService';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();  // Fetch users from API
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      await addUser(newUser);  // Add a new user using API
      const updatedUsers = await getUsers();  // Fetch updated user list
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup onAddUser={handleAddUser} onInputChange={handleInputChange} newUser={newUser} />} />
        <Route path="/form" element={<Form />} />
      </Routes>

      {/* <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username} ({user.email})</li>
          ))}
        </ul>
      </div> */}
    </Router>
  );
}

export default App;
