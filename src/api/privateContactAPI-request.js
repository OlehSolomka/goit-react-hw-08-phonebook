import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getPrivateContacts = () => {
  return axios.get('contacts');
};

export const postPrivateContacts = data => {
  return axios.post('contacts', data);
};
export const deletePrivateContacts = id => {
  return axios.delete(`contacts/${id}`);
};

export const updatePrivateContact = (data, id) => {
  return axios.patch(`contacts/${id}`, data);
};
