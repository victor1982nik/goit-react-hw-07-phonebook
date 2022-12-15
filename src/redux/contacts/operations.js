//import { contactsApi } from 'api/contactsApi';
import * as contactsActions from './actions';
import * as contactsAPI from '../../api/contactsApi';

export const fetchContacts = () => {
  return async dispatch => {
    dispatch(contactsActions.fetchContactsRequest());
    try {
      const contacts = await contactsAPI.fetchContacts();
      //console.log(contacts);
      dispatch(contactsActions.fetchContactsSuccess(contacts));
    } catch (e) {
      dispatch(contactsActions.fetchContactsError(e));
    } 
  };
};
