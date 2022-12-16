import {  createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {items: [], isLoading: false, error: null},    
    extraReducers: {
        [fetchContacts.fulfilled]: (state, action) => {
            return {...state, items: action.payload };
        },
        [fetchContacts.pending]: (state) => {
            return {...state, isLoading: true};
        },
        [fetchContacts.rejected]: (state, action) => {
            return {...state, error: action.payload};
        },
    }
})

export const contactsReducer = contactsSlice.reducer;