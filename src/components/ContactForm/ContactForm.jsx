import { Button, Form } from './ContactForm.styled';
import { Input, Label } from 'components/Filter/Filter.styled';
import toast, { Toaster } from 'react-hot-toast';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/RTK/contactsSlice';
import { Box } from '../Box/Box';

export function ContactForm() {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleSubmit = async e => {
    e.preventDefault();
    
    const { name, mobile } = e.target.elements;
    const form = e.currentTarget;
    
    if (name.value === '' || mobile.value === '') {
      toast.error('Введите имя или телефон');
      return;
    }
    
    const isInList = contacts.some(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    );

    if (isInList) {
      toast.error('Контакт уже есть в списке');
      form.reset();
      return;
    }
    await addContact({ name: name.value, phone: mobile.value });
    toast.success('Успешно добавлен');
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Toaster />
      <Box display="flex" justifyContent="space-between" pl={2} pr={2}>
        <Label>FullName</Label>
        <Input
          name="name"
          type="text"
          placeholder="FullName"
          //value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          //onChange={e => setName(e.target.value)}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" pl={2} pr={2}>
        <Label>Number</Label>
        <Input
          name="mobile"
          type="tel"
          placeholder="Phone number"
          //value={mobile}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          //onChange={e => setMobile(e.target.value)}
        />
      </Box>
      <Box display='flex' justifyContent="center"><Button type="submit">Add contact</Button></Box>
      
    </Form>
  );
}
