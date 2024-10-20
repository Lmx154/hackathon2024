import axios from 'axios';

// Set the base URL from the environment variable
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';  // Default to localhost if not set

// Create an Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle GET requests
export const getUsers = async () => {
  try {
    const response = await api.get('/users/');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getCreditScores = async () => {
  try {
    const response = await api.get('/credit-scores/');
    return response.data;
  } catch (error) {
    console.error('Error fetching credit scores:', error);
    throw error;
  }
};

export const getFinancialSituations = async () => {
  try {
    const response = await api.get('/financial-situations/');
    return response.data;
  } catch (error) {
    console.error('Error fetching financial situations:', error);
    throw error;
  }
};

export const getOpportunities = async () => {
  try {
    const response = await api.get('/opportunities/');
    return response.data;
  } catch (error) {
    console.error('Error fetching opportunities:', error);
    throw error;
  }
};

export const getUserOpportunities = async () => {
  try {
    const response = await api.get('/user-opportunities/');
    return response.data;
  } catch (error) {
    console.error('Error fetching user opportunities:', error);
    throw error;
  }
};

export const getAdvice = async () => {
  try {
    const response = await api.get('/advice/');
    return response.data;
  } catch (error) {
    console.error('Error fetching advice:', error);
    throw error;
  }
};

// Example POST request to add a new user
export const addUser = async (userData) => {
  try {
    const response = await api.post('/users/', userData);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

// Add similar POST, PUT, DELETE functions for other models as needed