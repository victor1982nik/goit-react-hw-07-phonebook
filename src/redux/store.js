import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice"; 
import {contactsReducer} from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {  
    contacts: contactsReducer,    
    filter: filterReducer,    
  },   
});