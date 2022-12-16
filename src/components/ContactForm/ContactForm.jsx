import { useDispatch } from "react-redux";
import { useState } from 'react';
import { Button, Form } from './ContactForm.styled';
import { Input, Label } from 'components/Filter/Filter.styled';
import * as contactsOperations from '../../redux/contacts/operations';

export function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const {name, mobile} = e.target.elements;    
    dispatch(contactsOperations.addContact({name: name.value, phone: mobile.value}));
    
    setName('');
    setMobile('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name</Label>
      <Input        
        name="name"
        type="text"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => setName(e.target.value)}
      />
      <br />
      <Label>Number</Label>
      <Input        
        name="mobile"
        type="tel"
        value={mobile}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={e => setMobile(e.target.value)}
      />
      <br />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
