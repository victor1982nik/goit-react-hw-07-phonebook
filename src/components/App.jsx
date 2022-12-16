import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectItems, selectIsLoading } from 'redux/contacts/selectors';
import * as contactsOperations from '../redux/contacts/operations';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  
  useEffect(()=> {
    dispatch(contactsOperations.fetchContacts())
  },[dispatch]);

  const contacts = useSelector(selectItems);
  //console.log(contacts);
  return (
    <div>
      <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
      {isLoading &&  <b>Request in progress...</b>} 
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


