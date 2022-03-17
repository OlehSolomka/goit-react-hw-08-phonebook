import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// oleh3@gmail.com oleh3oleh3

export const registerUser = user => {
  return axios.post('users/signup', user);
};
export const logInUser = user => {
  return axios.post('users/login', user);
};

export const logoutUser = () => {
  return axios.post('users/logout');
};
export const getUser = () => {
  return axios.get('users/current');
};
