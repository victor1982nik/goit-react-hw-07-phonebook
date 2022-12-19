import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { useGetContactsQuery } from 'redux/RTK/contactsSlice';
import { Box } from './Box/Box';

export function App() {
  const { data: contacts, isLoading } = useGetContactsQuery();  
  return (
    <Box bg="lightblue" display="flex" flexDirection="column" alignItems="center">
      <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading && <b>Request in progress...</b>}
        {contacts?.length > 0 && (
          <>
            <Filter />
            
            <ContactList />
          </>
        )}
      </Section>
    </Box>
  );
}
