import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice"; 
//import {contactsReducer} from './contacts/contactsSlice';
import { contactsApi } from "./RTK/contactsSlice";

export const store = configureStore({
  reducer: {  
    //contacts: contactsReducer,   
    [contactsApi.reducerPath]: contactsApi.reducer, 
    filter: filterReducer,    
  },   
  middleware: (getDefaultMiddleware) =>[
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});