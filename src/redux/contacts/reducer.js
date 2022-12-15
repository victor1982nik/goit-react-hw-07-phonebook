import { combineReducers, createReducer } from "@reduxjs/toolkit";
//import * as contactsActions from './actions';
import {filterChange} from './actions';
import { fetchContacts } from "./operations";

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_,action) => action.payload
})

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
})

const error = createReducer(null,{
    [fetchContacts.pending]: () => null,    
    [fetchContacts.rejected]: (_,action) => action.payload
})

const filter = createReducer("",{
    [filterChange]: (_,action) => action.payload
})
export default combineReducers({
    items,
    isLoading,
    error,
    filter,
}) 
