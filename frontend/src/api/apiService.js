import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // This should match your Django API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = async () => {
  try {
    const response = await api.get('/users/');  // Fetch users from the backend
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const addUser = async (userData) => {
  try {
    const response = await api.post('/users/', userData);  // Add a new user
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};
