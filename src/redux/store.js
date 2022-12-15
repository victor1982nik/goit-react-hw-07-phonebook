import { configureStore } from "@reduxjs/toolkit";
//import { contactsReducer } from "./contactsSlice";
//import { filterReducer } from "./filterSlice"; 
import contactsReducer from './contacts/reducer'

export const store = configureStore({
  reducer: {  
    contacts: contactsReducer,
    // contacts: {
    //   items: [],
    //   isLoading: false,
    //   error: null
    // },
    //filter: ""         
    //contacts: contactsReducer,
    //filter: filterReducer,    
  },   
});

