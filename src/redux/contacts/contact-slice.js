import { createSlice } from '@reduxjs/toolkit';
import { getContacts, deleteContact } from './contact-operations';
import {
  clearContacts,
  setFavContacts,
  deletefavContacts,
} from './contact-actions';

const initialState = {
  userContacts: [],
  favContacts: [],
  isFetchingContacts: false,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.pending]: state => {
      state.isFetchingContacts = true;
    },
    [getContacts.fulfilled]: (state, action) => {
      state.userContacts = action.payload;
      state.isFetchingContacts = false;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.userContacts = state.userContacts.filter(
        unit => unit.id !== action.payload
      );
      state.favContacts = state.favContacts.filter(
        unit => unit.id !== action.payload
      );
    },
    [clearContacts]: (state, action) => {
      state.userContacts = action.payload;
    },
    [setFavContacts]: (state, action) => {
      state.favContacts = [...state.favContacts, action.payload];
    },
    [deletefavContacts]: (state, action) => {
      state.favContacts = state.favContacts.filter(
        unit => unit.id !== action.payload
      );
    },
  },
});

export default contactSlice.reducer;

// ХОВАТИ КНОПКИ ADD i FAVORITE коли на сторінці вибранихб а замість них добавити кнопку CONTACTS
// зробити АВАТАР КОНТАКТІВ
