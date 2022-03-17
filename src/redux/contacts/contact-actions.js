import { createAction } from '@reduxjs/toolkit';

export const setFavContacts = createAction('contacts/setFavoriteContacts');
export const deletefavContacts = createAction(
  'contacts/deleteFavoriteContacts'
);
export const clearContacts = createAction('contacts/clearOnLogout');
