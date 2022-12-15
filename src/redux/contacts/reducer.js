import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as contactsActions from './actions';

const items = createReducer([], {
    [contactsActions.fetchContactsSuccess]: (_,action) => action.payload
})

const isLoading = createReducer(false, {
    [contactsActions.fetchContactsRequest]: () => true,
    [contactsActions.fetchContactsSuccess]: () => false,
    [contactsActions.fetchContactsError]: () => false,
})

const error = createReducer(null,{
    [contactsActions.fetchContactsRequest]: () => null,    
    [contactsActions.fetchContactsError]: (_,action) => action.payload
})

const filter = createReducer("",{
    [contactsActions.filterChange]: (_,action) => action.payload
})
export default combineReducers({
    items,
    isLoading,
    error,
    filter,
}) 
