import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getItems } from 'redux/contacts/selectors';
import * as contactsOperations from '../redux/contacts/operations';

export function App() {
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(contactsOperations.fetchContacts())
  },[dispatch]);

  const contacts = useSelector(getItems);
  //console.log(contacts);
  return (
    <div>
      <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts?.length > 0 && (
          <>
             <Filter /> 
            <br />
            <ContactList /> 
          </>
        )}
      </Section>
    </div>
  );
}


