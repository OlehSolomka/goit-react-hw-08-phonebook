import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { privateContactAPI } from 'api';

export const getContacts = createAsyncThunk(
  'contact/getUserContacts',
  async () => {
    const { data } = await privateContactAPI.getPrivateContacts();
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async id => {
    await privateContactAPI.deletePrivateContacts(id);
    return id;
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async contactItem => {
    const resp = await privateContactAPI.postPrivateContacts(contactItem);
    console.log(resp);
  }
);

export const clearContacts = createAction('contacts/clearOnLogout');
