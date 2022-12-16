import { createAsyncThunk } from '@reduxjs/toolkit';
//import * as contactsActions from './actions';
import * as contactsAPI from '../../api/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_,{rejectWithValue}) => {
    try{
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    }catch(e) {
      return rejectWithValue(e);
    }
  }
)

