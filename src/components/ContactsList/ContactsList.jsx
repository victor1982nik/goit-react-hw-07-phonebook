import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { List } from './ContactsList.styled';
import { deleteContact } from 'redux/contactsSlice';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const filter = useSelector(state => state.filter.filterStr);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    //console.log(normalizedFilter);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContacts();
  //console.log(contacts);
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
