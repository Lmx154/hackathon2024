import React, { useEffect, useState } from 'react';
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
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default App;