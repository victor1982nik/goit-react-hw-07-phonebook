import { useDispatch, useSelector} from 'react-redux';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { List } from './ContactsList.styled';
import { deleteContact } from 'redux/contactsSlice';
import * as contactsSelectors from 'redux/contacts/selectors';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getItems);
  const filter = useSelector(contactsSelectors.getFilter);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContacts();
  
  return (
    <ul>
      {filteredContacts.map((contact, index) => (
        <List key={contact.id}>
          {contact.name} {contact.tel}{' '}
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </List>
      ))}
    </ul>
  );
}
